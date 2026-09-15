import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import { Outlet } from 'react-router-dom'

const NavLayout = () => {
  return (
    <>
        <Navbar />

        <main>
            <Outlet />
        </main>

        <Footer/>
    </>
  )
}

export default NavLayout
