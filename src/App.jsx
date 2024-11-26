import { useEffect, useState } from 'react'
import Control from './components/control'
import Timer from './components/Timer';
import './App.css'

function App() {

  const phase = {
    session: "Session",
    break: "Break"
  };

  const defaultBreak = 5;
  const defaultSession = 25;
  const defaultPhase = phase.session;

  const [breakLength, setBreakLength] = useState(1);
  const [sessionLength, setSessionLength] = useState(1);
  const [currentPhase, setCurrentPhase] = useState(defaultPhase);
  const [currentTime, setCurrentTime] = useState(sessionLength * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setCurrentTime(prevTime => {
          console.log(prevTime);

          if (prevTime <= 0) {
            clearInterval(interval);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const toggleRunnning = () => {
    setIsRunning(!isRunning);
  }

  const reset = () => {
    setCurrentPhase(phase.session);
    setBreakLength(defaultBreak);
    setSessionLength(defaultSession);
    setCurrentTime(0);
  }

  return (
    <div>
      <Control controlName={"break"} defaultLength={breakLength}></Control>
      <Control controlName={"session"} defaultLength={sessionLength}></Control>
      <Timer currentPhase={currentPhase} timeLeft={currentTime} resetOnClick={reset}></Timer>
    </div>
  )
}

export default App
