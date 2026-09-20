import { Router } from "express";
import bookingRouter from "./bookings.route.mjs";
import contactRouter from "./contact.route.mjs";


const barrelRoute = Router()

barrelRoute.use(bookingRouter)
barrelRoute.use(contactRouter)


export default barrelRoute;