import { supabase } from '../../../database/supabase/supabaseClient.mjs'

export const isSlotAvailable = async (date_time) => {
    const {
        data: checkSlot,
        error: errorCheckingSlot
    } = await supabase
        .from('consultations')
        .select('*')
        .eq('date_time', date_time)
        .neq('consultation_status', 'cancelled')

    if (errorCheckingSlot) throw errorCheckingSlot

    return checkSlot.length === 0
}

export const createConsultation = async (consultationData) => {
    return await supabase
            .from('consultations')
            .insert(consultationData)
            .select()
            .single()
}