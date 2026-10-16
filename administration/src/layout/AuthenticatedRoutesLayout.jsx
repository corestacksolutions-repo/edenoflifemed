import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const AuthenticatedRoutesLayout = () => {

    const { adminToken } = useContext(AdminContext)
    const navigate = useNavigate()

    if (!adminToken) {
        return <Navigate to='/login' replace />
    }


  return (
    <div className='min-h-screen bg-[#F8F9FD]'>

        <Navbar />

        <div className="flex items-start">

            <Sidebar />

            <main className='flex-1 min-w-0 px-4 sm:px-10 py-3'>
                <Outlet />
            </main>
        </div>
    </div>
  )
}

export default AuthenticatedRoutesLayout
