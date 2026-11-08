import { Router } from "express";
import crypto from 'crypto'
import { supabase } from '../../../database/supabase/supabaseClient.mjs'

const webhookRoute = Router()

const webhookSecret = process.env.PAYCHANGU_WEBHOOK_SECRET


webhookRoute.post('/', async (req, res) => {
    try {

        console.log(`Webhook endpoint hit`)

        const rawBody = req.body

        const payLoad = Buffer.isBuffer
                        ? rawBody.toString('utf8')
                        : String(rawBody ?? '')

        const signature = req.headers["signature"]

        if (!webhookSecret) return res.status(500).json({
            success: false,
            message: `Webhook secret not configured!`
        })

        if (!signature) return res.status(400).json({
            success: false,
            message: `Signature missing from payload`
        })

        const computed = crypto
                        .createHmac('sha256', webhookSecret)
                        .update(payLoad)
                        .digest('hex')

        if (computed !== signature) return res.status(403).json({
            success: false,
            message: `Invalid signature`
        })

        const data = JSON.parse(payLoad)
        console.log(data)

        const reference = data.tx_ref
        const amount = Number(data.amount)
        const status = data.status

        console.log(`Logging out the reference, amount, and status as obtained from the webhook payload: `, reference, amount, status)

        if (status !== 'success' || !reference || !amount) return res.status(400).json({
            success: false,
            message: `Missing data fields in payload`
        })

        const {
            data: checkTransactionInstance,
            error
        } = await supabase
                    .from('appointments')
                    .select('*')
                    .eq('patient_reference', reference)
                    .single()

        if (error) throw new Error(error)

        if (!checkTransactionInstance) return res.status(404).json({
            success: false,
            message: `Patient transaction instance not found.`
        })

        console.log(`This is from checking the transaction instance:`, checkTransactionInstance)

        const newPaidAmount = (checkTransactionInstance.paid_amount || 0) + amount
        const totalAppointmentFee = checkTransactionInstance.appointment_fee || 4000

        console.log(`checking the newPaidAmount and the totalAppointmentFee: `, newPaidAmount, totalAppointmentFee)

        const payment_status = newPaidAmount >= totalAppointmentFee ? "Paid" : "Partially Paid"

        console.log(`Checking the payment status after comparing the newPaidAmount against the totalAppointmentFee: `, payment_status)


        const patient_id = checkTransactionInstance.id
        console.log(`After retrieving the data from the db using the reference, I want to know the patient_id: `, patient_id)

        // We want to run a test query using the patient_id
        const {
            data: retrievalByPatientId,
            error: errorRetrievingByPatientId
        } = await supabase
            .from('appointments')
            .select('*')
            .eq('id', patient_id)
            .single()

        console.log(`Checking to see if we can get a patient bu the id in the returned payload of checking transaction instance: `,retrievalByPatientId)
        

        const {
            data: updateInstance,
            error: updateError
        } = await supabase
                    .from('appointments')
                    .select('*')
                    .update({
                        paid_amount: newPaidAmount,
                        payment_status
                    })
                    .eq('patient_reference', reference)
                    .single()

        if (updateError) return res.json({
            success: false,
            message: `Error updating patient transaction instance`
        })

        console.log(`This is data from the update instance: `, updateInstance)

        res.status(200).json({
            success: true,
            message: `Webhook processed successfully`
        })
        
    } catch (error) {
        return res.json({
            success: false,
            message: `Webhook error!`
        })
    }
})

export default webhookRoute