import Clock from "./Clock";

const Count = ({ deadline }) => {
    return (
        <div className="App">
            <div className="App-title">Countdown Timer</div>
            <div className="App-date">{deadline}</div>
            <Clock deadline={deadline} />
        </div>
    );
}

export default Count;