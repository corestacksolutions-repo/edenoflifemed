import { Router } from "express";
import { checkSchema } from 'express-validator'
import { handleRequestValidation } from '../../../middlewares/validateRequest.mjs'
import { consultationValidationSchema } from '../consultation.validation.mjs'
import { appointmentValidationSchema } from '../appointment.validation.mjs'
import * as consultationController from "../controllers/consultation.controller.mjs";
import * as appointmentController from "../controllers/appointment.controller.mjs";

const bookingRouter = Router()

bookingRouter.post('/create-consultation', 
    checkSchema(consultationValidationSchema),
    handleRequestValidation,
    consultationController.createConsultation
)

bookingRouter.post('/create-appointment', 
    checkSchema(appointmentValidationSchema),
    handleRequestValidation,
    appointmentController.createAppointment
)


export default bookingRouter;