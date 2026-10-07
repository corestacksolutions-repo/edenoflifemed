import { supabase } from '../../../database/supabase/supabaseClient.mjs'

export const createConsultation = async (consultationData) => {
    return await supabase
            .from('consultations')
            .insert(consultationData)
            .select()
            .single()
}