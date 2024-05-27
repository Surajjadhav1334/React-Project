import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [products, setproducts] = useState([])

  return (
    <>
    <h1>Chai aur API</h1>
    <h2>Number of products are : {products}</h2>
    </>
  )
}

export default App
