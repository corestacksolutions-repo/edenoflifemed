import {createBrowserRouter} from 'react-router-dom';

import Home from './pages/Home'
import NavLayout from './layouts/NavLayout'
import ConsultationBooking from './pages/ConsultationBooking'
import Services from './pages/Services';
import Treatments from './pages/Treatments';
import ServiceDetails from './pages/ServicesDetails';
import NoPageFound from './pages/NoPageFound';
import About from './pages/About';
import Contact from './pages/Contact';

const router = createBrowserRouter([
    {
        path: '/',
        Component: NavLayout,
        children: [
            {index: true, Component: Home},
            {path: '/consultation', Component: ConsultationBooking},
            {path: '/services', Component: Services},
            {path: '/treatments', Component: Treatments},
            {path: '/treatments/:treatmentId', Component: ServiceDetails},
            {path: '/about', Component: About},
            {path: '/contact', Component: Contact}
        ]
    },

    {path: '*', Component: NoPageFound},
            
    
])

export default router;