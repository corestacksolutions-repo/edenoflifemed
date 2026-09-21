import {createBrowserRouter} from 'react-router-dom';

import Home from './pages/Home'
import NavLayout from './layouts/NavLayout'
import ConsultationBooking from './pages/ConsultationBooking'
import Services from './pages/Services';
import Treatments from './pages/Treatments';
import ServiceDetails from './pages/ServicesDetails';
import TreatmentDetail from './pages/treatmentDetails';
import NoPageFound from './pages/NoPageFound';
import About from './pages/About';
import Contact from './pages/Contact';
import BookingSuccess from './pages/BookingSuccessful';
import BookingFailed from './pages/BookingFailed';

const router = createBrowserRouter([
    {
        path: '/',
        Component: NavLayout,
        children: [
            {index: true, Component: Home},
            {path: '/consultation', Component: ConsultationBooking},
            {path: '/services', Component: Services},
            {path: '/treatments', Component: Treatments},
            {path: '/services/:serviceId', Component: ServiceDetails},
            {path: '/treatments/:treatmentId', Component: TreatmentDetail},
            {path: '/about', Component: About},
            {path: '/contact', Component: Contact}
        ]
    },

    {path: '*', Component: NoPageFound},

    // ✅ Success / Failure routes (outside layout for full-screen UX)
    {
        path: "/booking-success",
        Component: BookingSuccess,
    },
    {
        path: "/booking-failed",
        Component: BookingFailed,
    },
            
    
])

export default router;