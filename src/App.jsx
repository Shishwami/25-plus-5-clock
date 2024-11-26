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
      setTimeout(() => {
        console.log("Tick");
        if (currentTime <= 0) {
          setCurrentPhase(currentPhase === phase.session ? phase.break : phase.session);
          setCurrentTime(currentPhase === phase.session ? (breakLength * 60) + 2 : (sessionLength * 60) + 2);
          //play audio
        } else {
          setCurrentTime(currentTime - 1);
        }

      }, 1000);
    }
  });

  const toggleRunnning = () => {
    setIsRunning(!isRunning);
  }

  const breakIncrement = () => {
    if (breakLength <= 60) {
      setBreakLength(breakLength + 1)
    }
  }
  const breakDecrement = () => {
    if (breakLength >= 0) {
      setBreakLength(breakLength - 1)
    }
  }
  const sessionIncrement = () => {

  }
  const sessionDecrement = () => {

  }

  const reset = () => {
    setCurrentPhase(phase.session);
    setBreakLength(defaultBreak);
    setSessionLength(defaultSession);
    setIsRunning(false);
    setCurrentTime(0);
  }

  return (
    <div>
      <Control controlName={phase.break} defaultLength={breakLength} increment={breakIncrement} decrement={breakDecrement}></Control>
      <Control controlName={phase.session} defaultLength={sessionLength}></Control>
      <Timer currentPhase={currentPhase} timeLeft={currentTime} resetOnClick={reset} startStopOnClick={toggleRunnning}></Timer>
    </div>
  )
}

export default App
