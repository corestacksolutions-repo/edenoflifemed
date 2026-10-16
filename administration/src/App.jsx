import { RouterProvider } from 'react-router-dom'
import router from './Router'
import AdminContextProvider from './context/AdminContext'
import { ToastContainer }  from 'react-toastify'

const App = () => {
  return (
    <AdminContextProvider>
      <ToastContainer />
        <RouterProvider router={router} />
    </AdminContextProvider>
  )
}

export default App
