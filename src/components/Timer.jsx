function Timer({ currentPhase, timeLeft, resetOnClick, startStopOnClick, isRunning }) {

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secondsRemaining = seconds % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${secondsRemaining < 10 ? '0' : ''}${secondsRemaining}`;
    };

    return (
        <div id="timer">
            <p id="timer-label">{currentPhase}</p>
            <p id="time-left">{formatTime(timeLeft)}</p>
            <div className="btn-container">
                <button id="start_stop" onClick={startStopOnClick}>
                {
                   isRunning? <i className="fas fa-pause icon"></i>:  <i className="fas fa-play icon"></i>

                }
                </button>
                <button id="reset" onClick={resetOnClick}> <i className="fas fa-rotate-left icon"></i></button>
            </div>

        </div>
    )
}

export default Timer;