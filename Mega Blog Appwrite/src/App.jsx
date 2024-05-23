import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authservice from './appwrite/auth'
import {login, logout} from "./Store/Authslice"

import './App.css'
import { Header } from './components'
import {Footer} from './components'
import { Outlet } from 'react-router-dom'
// import { useDispatch } from 'react-redux'

function App() {
  const [loading, setloading] = useState(true)
  const dispatch = useDispatch()
  useEffect (() => {
    authservice.getCurrentuser().then((userdata) => {
      if (userdata) {
        dispatch(login({userdata}))
      }
      else
      {
        dispatch(logout())
      }
    })
    .finally(()=> setloading(false))
  }, [])

 return !loading ? (
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
  <div className='w-full block, '>
    <Header/>
    <main>
      <Outlet/>
    </main>
    <Footer/>
  </div>
  </div>
 ) : null
}

export default App
