import { useEffect, useState } from 'react';
import Control from './components/control';
import Timer from './components/Timer';
import './App.css';

function App() {
  const phase = {
    session: "session",
    break: "break"
  };

  const defaultBreak = 5;
  const defaultSession = 25;
  const defaultPhase = phase.session;

  const [breakLength, setBreakLength] = useState(defaultBreak);
  const [sessionLength, setSessionLength] = useState(defaultSession);
  const [currentPhase, setCurrentPhase] = useState(defaultPhase);
  const [currentTime, setCurrentTime] = useState(sessionLength * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const timer = setTimeout(() => {
        if (currentTime <= 0) {
          setCurrentPhase(currentPhase === phase.session ? phase.break : phase.session);
          setCurrentTime(
            currentPhase === phase.session
              ? breakLength * 60
              : sessionLength * 60
          );
        } else {
          setCurrentTime(prevTime => prevTime - 1);
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isRunning, currentTime, currentPhase, sessionLength, breakLength]);

  const toggleRunning = () => {
    setIsRunning(!isRunning);
  };

  const breakIncrement = () => {
    if (breakLength < 60 && !isRunning) {
      setBreakLength(prevLength => prevLength + 1);
    }
  };

  const breakDecrement = () => {
    if (breakLength > 1 && !isRunning) {
      setBreakLength(prevLength => prevLength - 1);
    }
  };

  const sessionIncrement = () => {
    if (sessionLength < 60 && !isRunning) {
      setSessionLength(prevLength => {
        const newLength = prevLength + 1;
        setCurrentTime(newLength * 60);
        return newLength;
      });
    }
  };

  const sessionDecrement = () => {
    if (sessionLength > 1 && !isRunning) {
      setSessionLength(prevLength => {
        const newLength = prevLength - 1;
        setCurrentTime(newLength * 60);
        return newLength;
      });
    } else if (!isRunning) {
      setSessionLength(1);
      setCurrentTime(60);
    }
  };

  const reset = () => {
    setIsRunning(false);
    setCurrentPhase(phase.session);
    setBreakLength(defaultBreak);
    setSessionLength(defaultSession);
    setCurrentTime(defaultSession * 60);
  };

  return (
    <div className='App'>
      <h1>25 + 5 Clock</h1>
      <div className='Container'>
        <Control
          controlName={phase.break}
          defaultLength={breakLength}
          increment={breakIncrement}
          decrement={breakDecrement}
        />
        <Control
          controlName={phase.session}
          defaultLength={sessionLength}
          increment={sessionIncrement}
          decrement={sessionDecrement}
        />
        <Timer
          currentPhase={currentPhase}
          timeLeft={currentTime}
          resetOnClick={reset}
          startStopOnClick={toggleRunning}
          isRunning={isRunning}
        />
        <audio id='beep' src='./assests.beep.mp3'>asdasd</audio>
      </div>
      <p id='footer'>by <a href=''> <i className='fab fa-github'></i> Shishwami</a></p>
    </div>
  );
}

export default App;
