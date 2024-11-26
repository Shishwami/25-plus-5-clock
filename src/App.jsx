import { useState } from 'react'
import Control from './components/control'
import './App.css'

function App() {


  return (
    <div>
      <Control controlName={"break"}></Control>
      <Control controlName={"session"}></Control>
    </div>
  )
}

export default App
