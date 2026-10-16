import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets_admin/assets'

const Sidebar = () => {

    const {adminToken} = useContext(AdminContext)

  return (
    <div className='min-h-screen bg-white border-r'>
      {
        adminToken &&
        <ul className='text-[#1e40af]'>
            <NavLink to={'/'} className={({isActive}) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-blue-300 border-r-4 border-blue-700' : ''}`}>
                <img src={assets.home_icon} alt="Dashboard" />
                <p>Dashboard</p>
            </NavLink>
            <NavLink to={'/all-appointments'} className={({isActive}) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-blue-300 border-r-4 border-blue-700' : ''}`}>
                <img src={assets.appointment_icon} alt="Appointments" />
                <p>All Appointments</p>
            </NavLink>
            <NavLink to={'/stock'} className={({isActive}) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-blue-300 border-r-4 border-blue-700' : ''}`}>
                <img src={assets.list_icon} alt="Stock" />
                <p>Stock</p>
            </NavLink>
            <NavLink to={'/add-doctor'} className={({isActive}) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-blue-300 border-r-4 border-blue-700' : ''}`}>
                <img src={assets.add_icon} alt="All Doctors" />
                <p>Add Doctor</p>
            </NavLink>
        </ul>
      }
    </div>
  )
}

export default Sidebar
