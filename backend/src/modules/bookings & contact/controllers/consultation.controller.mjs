import { generateReference } from '../../../utils/generateReference.mjs'
import * as consultationService from '../services/consultation.service.mjs'
import dotenv from 'dotenv'

dotenv.config()

const frontEndUrl = process.env.FRONTEND_URL

export const createConsultation = async (req, res, next) => {
    try {
        const {
            patient_reference: _ignoreRef,
            consultation_status: _ignoreStatus,
             paid_amount: _ignoreAmount,
            fullName: full_name,
            email,
            phone,
            country,
            dateTime: date_time,
            purpose,
            message
        } = req.validatedData

        const patient_reference = generateReference()
        const consultation_status = 'pending'
        const paid_amount = 0
        

        const consultation = await consultationService
                                    .createConsultation({
                                        patient_reference,
                                        consultation_status,
                                        paid_amount,
                                        full_name,
                                        email,
                                        phone,
                                        country,
                                        date_time,
                                        purpose,
                                        message
                                    })

        return res.status(201).json({
            success: true,
            data: consultation,
            redirectUrl: `${frontEndUrl}/booking-success?ref=${patient_reference}`,
        })
    } catch (error) {
        return next(error)
    }
}