import { useState } from 'react'
import Control from './components/control'
import './App.css'

function App() {

  const defaultBreak=5;
  const defaultSession=25;

  return (
    <div>
      <Control controlName={"break"} defaultLength={defaultBreak}></Control>
      <Control controlName={"session"} defaultLength={defaultSession}></Control>
    </div>
  )
}

export default App
