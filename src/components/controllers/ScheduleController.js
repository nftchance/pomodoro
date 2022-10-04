import Button from "../forms/Button";
import Input from "../forms/Input";

import "../../style/controllers/ScheduleController.css";

// Controller that controls the updates for a Pomodoro schedule
const ScheduleController = ({ schedule, setSchedule }) => {
    return (
        <div className="schedule__controller">
            <Input
                label="Work Periods"
                name="workPeriods"
                type="number"
                value={schedule.workPeriods}
                onChange={e => setSchedule({ ...schedule, workPeriods: e.target.value })}
            />

            <Input
                label="Work Period Duration (Minutes)"
                name="workPeriodLength"
                type="number"
                value={schedule.workPeriodLength}
                onChange={e => setSchedule({ ...schedule, workPeriodLength: e.target.value })}
            />

            <Input
                label="Break Period Duration (Minutes)"
                name="breakPeriodLength"
                type="number"
                value={schedule.breakPeriodLength}
                onChange={e => setSchedule({ ...schedule, breakPeriodLength: e.target.value })}
            />

            <Input 
                label="Long Break Period Duration (Minutes)"
                name="longBreakPeriodLength"
                type="number"
                value={schedule.longBreakPeriodLength}
                onChange={e => setSchedule({ ...schedule, longBreakPeriodLength: e.target.value })}
            />

            <Input
                label="Start Time"
                name="startTime"
                type="time"
                value={schedule.startTime}
                onChange={e => setSchedule({ ...schedule, startTime: e.target.value })}
            />

            <Button className="button button__secondary">Create Room</Button>
        </div>
    )
}

export default ScheduleController;