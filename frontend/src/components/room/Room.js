import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ResearchLink from "../links/ResearchLink"
import Clock from "./Clock";

import "../../style/room/Room.css"

const TYPES = {
    'work': 'Work',
    'short_break': 'Short Break',
    'long_break': 'Long Break'
}

const RoomPeriod = ({ period, active }) => {
    const formatTime = (time) => {
        const date = new Date(time)
        return date.toLocaleTimeString()
    }

    const [expanded, setExpanded] = useState(false)

    return (
        <div
            className={active === true ? "room__period active" : "room__period"}
            onClick={() => setExpanded(!expanded)}
        >
            {/* show countdown to this block until it is active */}
            <p className="room__period__status">
                <div className="room__period__status__type">
                    <span>{TYPES[period.type]}</span>
                </div>

                <div className="room__period__status__time">
                    {
                        active === false
                            ? <>
                                <div className="room__period__upcoming__circle"></div> <Clock deadline={period.start} />
                            </> : <>
                                <div className={
                                    period.type === 'work'  ? "room__period__active__circle" : "room__period__break__circle"
                                }></div> <span>Active</span>
                            </>
                    }
                </div>
            </p>

            <div className="room__period__advanced" style={{
                display: expanded === true ? 'block' : 'none'
            }}>
                <p>Duration: <span>{period.duration} mins</span></p>
                <p>Start: <span>{formatTime(period.start)}</span></p>
                <p>End: <span>{formatTime(period.end)}</span></p>
            </div>
        </div>
    )
}

const RoomContent = ({ room }) => {
    const started = room.start_time <= new Date().toISOString()

    const activePeriod = Object.values(room.periods).find(period => {
        const now = new Date()
        const start = new Date(period.start)
        const end = new Date(period.end)

        return now >= start && now <= end
    })

    const periodsRemaining = Object.values(room.periods).filter(period => {
        const now = new Date()
        const end = new Date(period.end)

        return now <= end
    })

    return (
        <div className="room">
            <h3>
                <ResearchLink to={'/room/' + room.id}>{room.room_code}</ResearchLink>
            </h3>
            <h1>In: {TYPES[activePeriod.type]}</h1>

            <div className="room__clock">
                <p>Periods Remaining: <span>{periodsRemaining.length}</span></p>
                <p>Work Period Duration: <span>{room.work_period_duration} mins</span></p>
                <p>Break Period Duration: <span>{room.break_period_duration} mins</span></p>
                <p>Long Break Period Duration: <span>{room.long_break_period_duration} mins</span></p>

                {room.start_time && <>
                    {started === true && <p>Active Period: {
                        <Clock deadline={activePeriod.end} />
                    }</p>}
                    {!started && <p>Time Until Starting: <Clock deadline={room.start_time} /></p>}
                </>}
            </div>

            <div className="room__periods">
                {/* Loop through periods dictionary and show list */}
                {Object.keys(room.periods).filter((key, index) => {
                    // confirm the end time has not already passed
                    const now = new Date()
                    const end = new Date(room.periods[key].end)

                    return now <= end
                }).map((key, index) => {
                    const period = room.periods[key]
                    return (
                        <RoomPeriod
                            key={index}
                            period={period}
                            active={activePeriod.start === period.start}
                        />
                    )
                })}
            </div>
        </div>
    )
}

const Room = () => {
    const { roomId } = useParams();

    const [room, setRoom] = useState({});

    useEffect(() => {
        const fetchRoom = () => {
            fetch(`/room/${roomId}`)
                .then(response => response.json())
                .then(data => {
                    setRoom(data)
                })
        }

        fetchRoom()
    }, [roomId])

    return (
        <div className="container">
            {room.work_periods && <RoomContent room={room} />}
        </div>
    )
}

export default Room;