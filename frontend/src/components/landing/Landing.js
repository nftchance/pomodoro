import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import Button from '../forms/Button';
import Input from '../forms/Input';

import ResearchLink from '../links/ResearchLink';

import ScheduleController from '../controllers/ScheduleController';

import "../../style/landing/Landing.css";

const Landing = (props) => {
    const navigate = useNavigate();

    const [roomCode, setRoomCode] = useState("");

    const [schedule, setSchedule] = useState({
        work_periods: 4,
        work_period_duration: 25,
        break_period_duration: 5,
        long_break_period_duration: 15,
        start_time: "2022-10-04T19:28:00Z"
    });
    const onRoomCodeChange = (roomCode) => {
        setRoomCode(roomCode.toUpperCase().substring(0, 8).replace(/[^A-Z]/g, ""));
    }

    const onRoomJoin = () => {
        navigate(`/room/${roomCode}`);
    }

    const onRoomCreate = () => {
        console.log('here')

        // post into api and wait to get back the room code
        fetch("http://localhost:8000/room/", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(res => res.json())
            .then(data => {
                navigate(`/room/${data.room_code}`);
            });
    }

    return (
        <div className="landing">
            <div className="container">
                <div className="landing__container__header">
                    <h1 className="landing__container__header__title">
                        Turbocharge yours and your groups efficiency with <ResearchLink internal={true} to={"/"}>Hyper Pomodoro</ResearchLink>.
                    </h1>
                    <p className="landing__container__header__subtitle">Forget timezones. Sync flow on one schedule with regular fatigue-preventing breaks and enjoy a group-working experience like no other.</p>

                    {/* Join room button followed by a create room button */}
                    <div className="landing__container__header__buttons">
                        <Input
                            label="Room Code"
                            name="roomCode"
                            type="text"
                            placeholder="Enter room code"
                            value={roomCode}
                            onChange={e => onRoomCodeChange(e.target.value)}
                        />
                        <Button
                            className="button button__primary"
                            onClick={onRoomJoin}
                        >Join Room</Button>
                    </div>
                </div>

                <h2>
                    Create your <ResearchLink>Pods</ResearchLink> <ResearchLink>Pomodoro Schedule</ResearchLink>
                </h2>

                <ScheduleController
                    schedule={schedule}
                    setSchedule={setSchedule}
                    onRoomCreate={onRoomCreate}
                />
            </div>
        </div>
    );
}

export default Landing;