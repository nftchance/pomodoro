import { useState } from 'react';

import Button from '../forms/Button';
import Input from '../forms/Input';

import ResearchLink from '../links/ResearchLink';

import ScheduleController from '../controllers/ScheduleController';

import "../../style/landing/Landing.css";

const Landing = () => {
    const [roomCode, setRoomCode] = useState("");

    const [schedule, setSchedule] = useState({
        workPeriods: 4,
        workPeriodLength: 25,
        breakPeriodLength: 5,
        longBreakPeriodLength: 15,
        startTime: "09:00"
    });

    const onRoomCodeChange = (roomCode) => { 
        setRoomCode(roomCode.toUpperCase().substring(0, 8).replace(/[^A-Z]/g, ""));
    }

    return (
        <div className="landing">
            <div className="container">
                <div className="landing__container__header">
                    <h1 className="landing__container__header__title">
                        <ResearchLink>Hyper Pomodoro</ResearchLink>
                    </h1>
                    <p className="landing__container__header__subtitle">Forget timezones. Sync yours or a groups workflow on one schedule.</p>

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
                        <Button className="button button__primary">Join Room</Button>
                    </div>
                </div>

                <h2>
                    Create your <ResearchLink>Pods</ResearchLink> <ResearchLink>Pomodoro Schedule</ResearchLink></h2>
                <ScheduleController schedule={schedule} setSchedule={setSchedule} />
            </div>
        </div>
    );
}

export default Landing;