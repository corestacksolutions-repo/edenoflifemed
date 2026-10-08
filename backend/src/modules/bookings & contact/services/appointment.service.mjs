import * as appointmentRepository from '../repositories/appointment.repository.mjs'

export const createAppointment = async ({
    patient_reference,
    appointment_status,
    paid_amount,
    full_name,
    email,
    phone,
    country,
    date_time,
    notes
}) => {
    const payload = {
        patient_reference,
        appointment_status,
        paid_amount,
        full_name,
        email,
        phone,
        country,
        date_time,
        notes,
        appointment_fee: 4000
    }

    // We need logic to check date and time if they are in the present not past
    if (new Date(date_time) < new Date()) {
        throw new Error(`Appointment date and time cannot be in the past`)
    }

    // then we check if the slot is available for booking
    const available = await appointmentRepository
                        .isSlotAvailable(date_time)

    if (!available) throw new Error(`Appointment slot is unavailable`)

    const {
        data: finalData,
        error
    } = await appointmentRepository
                            .createAppointment([payload])

    if (error) throw error

    return finalData;
}