import { generateReference } from "../../../utils/generateReference.mjs"
import * as consultationRepository from '../repositories/consultation.repository.mjs'

export const createConsultation = async ({
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
        }) => {

        // Calibrating data incase of false manipulation
        // const {
        //     // patient_reference: _ignoreRef,
        //     // consultation_status: _ignoreStatus,
        //     // paid_amount: _ignoreAmount,
        //     fullName,
        //     email,
        //     phone,
        //     country,
        //     dateTime,
        //     purpose,
        //     message
        // } = data

        // 
        // patient_reference = generateReference()
        

        const payload = {
            patient_reference,
            consultation_status,
            paid_amount,
            full_name,
            email,
            phone,
            date_time,
            country,
            purpose,
            message,
            consultation_fee: 15000
            // ...data
        }

        const available = await consultationRepository
                            .isSlotAvailable(date_time)
                
        if (!available) throw new Error(`Appointment slot is unavailable`)

        const {data: finalData , error} = await consultationRepository
                                .createConsultation([payload])

        if (error) throw error
        // new Error(`Failed to create new consultation`)

        return finalData;

}