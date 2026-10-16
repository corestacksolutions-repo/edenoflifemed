import { Router } from "express";
import * as adminAuthController from '../controllers/adminAuth.controller.mjs'
import authenticationCheck from "../../../middlewares/authMiddleware.mjs";


const adminRouter = Router()

adminRouter.post('/login', adminAuthController.adminLoginAuth)

adminRouter.get('/appointments', 
                authenticationCheck,
                adminAuthController.adminGetAppointments
)

adminRouter.get('/consultations', 
                authenticationCheck,
                adminAuthController.adminGetConsultations
)

adminRouter.get('/contacts', 
                authenticationCheck,
                adminAuthController.adminGetContactMessages
)

export default adminRouter;