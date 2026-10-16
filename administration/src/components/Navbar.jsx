import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import {assets} from '../assets/assets_admin/assets.js'

const Navbar = () => {

    const { adminToken, setAdminToken} = useContext(AdminContext)

    const logout = () => {
        adminToken && setAdminToken('')
        adminToken && localStorage.removeItem('adminToken')
    }

  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white">
      <div className='flex items-center gap-2 text-xs'>
        <img className='w-36 sm:w-40 cursor-pointer' src={assets.edenam_logo} alt="Logo" />
        <p className='border px-2.5 py-0.5 rounded-full border-blue-500 text-blue-600'>
            {adminToken ? 'Admin' : 'Doctor' }
        </p>
      </div>
      <button className='bg-red-500 text-white text-sm px-10 py-2 rounded-full' onClick={logout}>
        Logout
      </button>
    </div>
  )
}

export default Navbar
