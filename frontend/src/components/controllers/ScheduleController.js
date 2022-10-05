import Button from "../forms/Button";
import Input from "../forms/Input";

import "../../style/controllers/ScheduleController.css";

// Controller that controls the updates for a Pomodoro schedule
const ScheduleController = ({ schedule, setSchedule, onRoomCreate }) => {
    return (
        <div className="schedule__controller">
            <Input
                label="Work Periods"
                name="workPeriods"
                type="number"
                value={schedule.work_periods}
                onChange={e => setSchedule({ ...schedule, work_periods: e.target.value })}
            />

            <Input
                label="Work Period Duration (Minutes)"
                name="workPeriodLength"
                type="number"
                value={schedule.work_period_duration}
                onChange={e => setSchedule({ ...schedule, work_period_duration: e.target.value })}
            />

            <Input
                label="Break Period Duration (Minutes)"
                name="breakPeriodLength"
                type="number"
                value={schedule.break_period_duration}
                onChange={e => setSchedule({ ...schedule, break_period_duration: e.target.value })}
            />

            <Input 
                label="Long Break Period Duration (Minutes)"
                name="longBreakPeriodLength"
                type="number"
                value={schedule.long_break_period_duration}
                onChange={e => setSchedule({ ...schedule, long_break_period_duration: e.target.value })}
            />

            <Input
                label="Start Time"
                name="startTime"
                type="datetime-local"
                value={schedule.start_time}
                onChange={e => setSchedule({ ...schedule, start_time: e.target.value })}
            />

            <Button 
                className="button button__secondary"
                onClick={onRoomCreate}
            >Create Room</Button>
        </div>
    )
}

export default ScheduleController;