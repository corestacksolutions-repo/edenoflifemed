// import createPayment from "../../../services/payments.mjs";
import { generateReference } from "../../../utils/generateReference.mjs";
import * as appointmentService from '../services/appointment.service.mjs'
import dotenv from "dotenv";
import * as payments from '../../../services/payments.mjs'
import { redirect } from "react-router-dom";

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

        const response = await fetch("https://api.paychangu.com/payment", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${paychanguSecretKey}`
            },
            body: JSON.stringify({
                amount: payload.booking_fee,
                currency: 'MWK',
                email: payload.email ? payload.email : '',
                first_name: payload.full_name,
                last_name: payload.full_name,
                callback_url: `https://edenoflifemed.vercel.app/appointment?ref=${patient_reference}`,
                return_url: `https://edenoflifemed.onrender.com/webhook`,
                tx_ref: patient_reference
            })
        })

        const paymentCreationPayload = response.json()
        console.log(paymentCreationPayload)

        const paymentUrl = paymentCreationPayload?.data?.checkout_url

        if (!paymentUrl) return res.json({
            success: false,
            message: `Failed to get payment link.`
        })





        // const result = await payments.createPayment()

        // console.log(result)
        
        return res.status(201).json({
            success: true,
            data: appointment,
            redirectUrl: paymentUrl
            // redirectUrl: `${frontEndUrl}/booking-success?ref=${patient_reference}`,
        })
    }catch (error) {
        return next(error)
    }
}