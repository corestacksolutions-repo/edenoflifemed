import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import { Outlet, useLocation } from 'react-router-dom'

const NavLayout = () => {

  const {pathname} = useLocation();
  useEffect(()=>{
      window.scrollTo({
          top:0,
          behavior:"smooth"
      })
  },[pathname])
  
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
