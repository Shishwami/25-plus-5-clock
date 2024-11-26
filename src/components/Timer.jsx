function Timer({ currentPhase, timeLeft, resetOnClick, startStopOnClick }) {

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secondsRemaining = seconds % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${secondsRemaining < 10 ? '0' : ''}${secondsRemaining}`;
    };

    return (
        <div className="timer">
            <p id="timer-label">{currentPhase}</p>
            <p id="time-left">{formatTime(timeLeft)}</p>
            <button id="start_stop" onClick={startStopOnClick}></button>
            <button id="reset" onClick={resetOnClick}></button>
        </div>
    )
}

export default Timer;