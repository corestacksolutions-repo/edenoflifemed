import { Router } from "express";
import { checkSchema } from 'express-validator'
import { handleRequestValidation } from '../../../middlewares/validateRequest.mjs'
import { consultationValidationSchema } from '../consultation.validation.mjs'
import * as consultationController from "../controllers/consultation.controller.mjs";


const bookingRouter = Router()

bookingRouter.post('/create-consultation', 
    checkSchema(consultationValidationSchema),
    handleRequestValidation,
    consultationController.createConsultation
)


export default bookingRouter;