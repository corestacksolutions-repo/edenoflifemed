import { supabase } from "../../../database/supabase/supabaseClient.mjs";

export const isSlotAvailable = async (date_time) => {
    const {
        data: checkSlot,
        error: errorCheckingSlot
    } = await supabase
        .from('appointments')
        .select('*')
        .eq('date_time', date_time)
        .neq('appointment_status', 'cancelled')

    if (errorCheckingSlot) throw errorCheckingSlot

    return checkSlot.length === 0
}

export const createAppointment = async (appointmentData) => {
    return await supabase
            .from('appointments')
            .insert(appointmentData)
            .select()
            .single()
}