import { generateReference } from "../../../utils/generateReference.mjs";
import * as appointmentService from '../services/appointment.service.mjs'
import dotenv from "dotenv";

dotenv.config();

const frontEndUrl = process.env.FRONTEND_URL

export const createAppointment = async (req, res, next) => {
    try {
        const {
            patient_reference: _ignoreRef,
            appointment_status: _ignoreStatus,
            paid_amount: _ignoreAmount,
            full_name,
            email,
            phone,
            country,
            date_time,
            notes
        } = req.validatedData

        const patient_reference = generateReference()
        const appointment_status = 'pending'
        const paid_amount = 0

        const appointment = await appointmentService
                                    .createAppointment({
                                        patient_reference,
                                        appointment_status,
                                        paid_amount,
                                        full_name,
                                        email,
                                        phone,
                                        country,
                                        date_time,
                                        notes
                                    })
        
        return res.status(201).json({
            success: true,
            data: appointment,
            redirectUrl: `${frontEndUrl}/booking-success?ref=${patient_reference}`,
        })
    }catch (error) {
        return next(error)
    }
}