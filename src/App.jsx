import { useState } from 'react'
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

  const [breakLength, setBreakLength] = useState(defaultBreak);
  const [sessionLength, setSessionLength] = useState(defaultSession);
  const [currentPhase, setCurrentPhase] = useState(defaultPhase);

  return (
    <div>
      <Control controlName={"break"} defaultLength={breakLength}></Control>
      <Control controlName={"session"} defaultLength={sessionLength}></Control>
      <Timer currentPhase={currentPhase}></Timer>
    </div>
  )
}

export default App
