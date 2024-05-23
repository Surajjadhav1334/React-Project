import React from 'react'
import Header from './components/headder/Headder'
import Footer from './components/footer/footer'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
     <Header/>
    <Outlet/>
     <Footer/>
    </>
  )
}

export default Layout
