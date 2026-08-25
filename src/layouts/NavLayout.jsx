import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const NavLayout = () => {
  return (
    <>
        <Navbar />

        <main>
            <Outlet />
        </main>
    </>
  )
}

export default NavLayout
