import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function Layout() {
  return (
    <>
    <Navbar/>
    <Sidebar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout