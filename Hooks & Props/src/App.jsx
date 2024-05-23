import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)

  let myobj = {
    username: "suraj",
    age: 21
  }
  let arr = [1, 2, 3]
 
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind CSS</h1>
    <Card username = "chai aur code" btnText ="okay"  />
    <Card username=" suraj" /> 
    </>
  )
}

export default App
