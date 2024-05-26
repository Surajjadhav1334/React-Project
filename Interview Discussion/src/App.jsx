import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setvalue] = useState(1)
  const [multipliedvalue, setmultipliedvalue] = useState(1)

  const multiplyby5 = () => {
    setmultipliedvalue (value * 5) 
    setvalue(value + 1)
  }
 
  return (
    <>
     <h1>Main Value: {value} </h1>
     <button onClick={
      multiplyby5
     }>Click to Multiply by 5</button>
     <h2>Multiplied Value {multipliedvalue}</h2>
    </>
  )
}

export default App
