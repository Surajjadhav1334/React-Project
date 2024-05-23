import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Addtodo from './components/Addtodo'
import Todos from './components/Simpletodo'
import { removetodo } from './features/Todo/Todoorslice'

function App() {
  

  return (
    <>
     <h1>Learn about redux toolkit</h1>
     <Addtodo/>
     <Todos/>
     <removetodo/>
     
    </>
  )
}

export default App
