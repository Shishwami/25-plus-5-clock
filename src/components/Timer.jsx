function Timer({currentPhase,timeLeft}) {

    return (
        <div className="timer">
            <p id="timer-label">{currentPhase}</p>
            <p id="time-left">{timeLeft}</p>
            <button id="start_stop"></button>
            <button id="reset"></button>
        </div>
    )
}

export default Timer;