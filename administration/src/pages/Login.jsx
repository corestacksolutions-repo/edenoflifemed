import React, { useContext, useState } from 'react'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {

    const [userState, setUserState] = useState('Admin')

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    console.log(formData)

    const {backendUrl, setAdminToken} = useContext(AdminContext)

    console.log(backendUrl)

    const navigate = useNavigate()

    const handleInputChange = (e) => {
        const {name, value} = e.target

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const payload = {
                email: formData.email,
                password: formData.password
            }

            console.log(`Payload:`, payload)

            if (userState === 'Admin') {
                // Submitting as Admin
                const {data} = await axios.post(backendUrl+`/api/admin/login`, payload)
                console.log(data)

                if (data.success) {
                    localStorage.setItem('adminToken', data.token)
                    setAdminToken(data.token)
                    navigate('/', {replace: true})
                }else {
                    toast.error(data.message)
                }

            }else{
                // Submitting as Doctor
            }
            

        } catch (error) {
            toast.error(error.message)
        }
    }


  return (
    <form onSubmit={handleSubmit} className='min-h-[80vh] flex items-center'>
        <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#1e40af] text-sm shadow-lg">
            <p className='text-2xl font-semibold m-auto'>
                <span className='text-blue-900/70'>
                    {userState}
                </span> Login
            </p>

            <div className="w-full">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} 
                    className='border border-[#DADADA] rounded w-full p-2 mt-1'
                />
            </div>

            <div className="w-full">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={formData.password} onChange={handleInputChange}
                    className='border border-[#DADADA] rounded w-full p-2 mt-1'
                />
            </div>

            <button className='w-full py-2 rounded-md text-base bg-blue-950 text-white hover:bg-blue-900 transition-colors duration-300'>
                Login
            </button>

            {
                userState === 'Admin'
                ? <p>Doctor Login? <span className='text-[#5F6FFF] underline cursor-pointer' onClick={() => setUserState('Doctor')}>click here</span> </p>
                : <p>Admin Login? <span className='text-[#5F6FFF] underline cursor-pointer' onClick={() => setUserState('Admin')}>click here</span> </p>
            }
        </div>
    </form>
  )
}

export default Login
