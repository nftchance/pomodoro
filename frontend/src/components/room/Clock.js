import { useEffect, useState } from "react";

const Clock = (props) => { 
    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    useEffect(() => { 
        const getTimeUntil = (deadline) => {
            const time = Date.parse(deadline) - Date.parse(new Date())
            const seconds = Math.floor((time / 1000) % 60)
            const minutes = Math.floor((time / 1000 / 60) % 60)
            const hours = Math.floor((time / (1000 * 60 * 60)) % 24)
            const days = Math.floor(time / (1000 * 60 * 60 * 24))

            setTime({
                days,
                hours,
                minutes,
                seconds
            })
        }

        getTimeUntil(props.deadline);

        const interval = setInterval(() => getTimeUntil(this.props.deadline), 1000);

        return () => {
            clearInterval(interval);
        }
    })

    const leading0 = (num) => {
        return num < 10 ? "0" + num : num;
    }

    return (
        <div style={{
            display: "flex",
            float: "right"
        }}>
            {time.days > 0 && <span className="Clock-days">{leading0(time.days)}:</span>}
            {time.hours > 0 && <span className="Clock-hours">{leading0(time.hours)}:</span>}
            <span className="Clock-minutes">{leading0(time.minutes)}:</span>
            <span className="Clock-seconds">{leading0(time.seconds)}</span>
        </div>
    );
}
export default Clock;
