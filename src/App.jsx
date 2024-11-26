import { useEffect, useState } from 'react'
import Control from './components/control'
import Timer from './components/Timer';
import './App.css'

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
        console.log("Tick");

        if (currentTime <= 0) {
          setCurrentPhase(
            currentPhase === phase.session ? phase.break : phase.session
          );

          setCurrentTime(
            currentPhase === phase.session
              ? (breakLength * 60) + 2
              : (sessionLength * 60) + 2
          );

          // Play audio 
        } else {
          setCurrentTime(prevTime => prevTime - 1);
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isRunning, currentTime, currentPhase, sessionLength, breakLength]);

  const toggleRunnning = () => {
    setIsRunning(!isRunning);
  }

  const breakIncrement = () => {
    if (breakLength < 60 && !isRunning) {
      setBreakLength(breakLength + 1)
    }
  }
  const breakDecrement = () => {
    if (breakLength > 1 && !isRunning) {
      setBreakLength(breakLength - 1)
    }
  }
  const sessionIncrement = () => {
    if (sessionLength < 60 && !isRunning) {
      setSessionLength(prevLength => {
        const newLength = prevLength + 1;
        setCurrentTime(newLength * 60);
        return newLength;
      });
    }
  }
  const sessionDecrement = () => {
    if (sessionLength > 1 && !isRunning) {
      setSessionLength(prevLength => {
        const newLength = prevLength - 1;
        setCurrentTime(newLength * 60);
        return newLength;
      });
    }
  }

  const reset = () => {
    setCurrentPhase(phase.session);
    setBreakLength(defaultBreak);
    setSessionLength(defaultSession);
    setCurrentTime(sessionLength * 60);
    setIsRunning(false);
  }

  return (
    <div>
      <Control controlName={phase.break} defaultLength={breakLength} increment={breakIncrement} decrement={breakDecrement}></Control>
      <Control controlName={phase.session} defaultLength={sessionLength} increment={sessionIncrement} decrement={sessionDecrement}></Control>
      <Timer currentPhase={currentPhase} timeLeft={currentTime} resetOnClick={reset} startStopOnClick={toggleRunnning}></Timer>
    </div>
  )
}

export default App
