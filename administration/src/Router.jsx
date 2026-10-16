import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import AuthenticatedRoutesLayout from "./layout/AuthenticatedRoutesLayout";
import Dashboard from "./pages/administration/Dashboard";
import AllAppointments from "./pages/administration/AllAppointments";
import Stock from "./pages/administration/Stock";
import AddDoctor from "./pages/administration/AddDoctor";


const router = createBrowserRouter([
    {
        path: '/',
        Component: AuthenticatedRoutesLayout,
        children: [
            {
                path: '/',
                Component: Dashboard
            },
            {
                path: '/all-appointments',
                Component: AllAppointments
            },
            {
                path: '/stock',
                Component: Stock
            },
            {
                path: '/add-doctor',
                Component: AddDoctor
            }
        ]
    },
    {
        path: '/login',
        Component: Login
    }
])

export default router;