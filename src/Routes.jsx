import {createBrowserRouter} from 'react-router-dom';

import Home from './pages/Home'
import NavLayout from './layouts/NavLayout'
import Booking from './pages/Booking';
import Treatments from './pages/Treatments';
import TreatmentDetails from './pages/TreatmentDetails';
import NoPageFound from './pages/NoPageFound';
import About from './pages/About';
import Contact from './pages/Contact';

const router = createBrowserRouter([
    {
        path: '/',
        Component: NavLayout,
        children: [
            {index: true, Component: Home},
            {path: '/booking', Component: Booking},
            {path: '/treatments', Component: Treatments},
            {path: '/treatments/:treatmentId', Component: TreatmentDetails},
            {path: '/about', Component: About},
            {path: '/contact', Component: Contact}
        ]
    },

    {path: '*', Component: NoPageFound},
            
    
])

export default router;