import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import Moment from 'react-moment';

import Count from "./Count";

const Room = (props) => {
    const { roomId } = useParams();

    const [room, setRoom] = useState({});

    useEffect(() => {
        const fetchRoom = () => {
            fetch(`/room/${roomId}`)
                .then(response => response.json())
                .then(data => {
                    setRoom(data)
                    console.log(data)
                })
        }

        fetchRoom()
    }, [roomId])

    return (
        <div className="container">
            <h1>{roomId}</h1>

            <p>Work Periods: {room.work_periods}</p>
            <p>Work Period Duration: {room.work_period_duration}</p>
            <p>Break Period Duration: {room.break_period_duration}</p>
            <p>Long Break Period Duration: {room.long_break_period_duration}</p>

            <p>Start Time: <Moment>{room.start_time}</Moment></p>

            <Count deadline={room.start_time} />
        </div>
    )
}

export default Room;