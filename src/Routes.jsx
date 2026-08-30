import {createBrowserRouter} from 'react-router-dom';

import Home from './pages/Home'
import NavLayout from './layouts/NavLayout'
import Booking from './pages/Booking';
import About from './pages/About';
import Contact from './pages/Contact';



const router = createBrowserRouter([
    {
        path: '/',
        Component: NavLayout,
        children: [
            {index: true, Component: Home},
            {path: '/booking', Component: Booking},
            {path: '/about', Component: About},
        ]
        
    },
    {path: '/contact', Component: Contact}
])

export default router;