import { supabase } from "../../../database/supabase/supabaseClient.mjs";

export const getAllAppointments = async () => {
    const {data, error} = await supabase
                .from('appointments')
                .select('*')
                .order('created_at', {ascending: false})
                
    if (error) {
        throw error
    }

    return data ?? []
}

export const getAllConsultations = async () => {
    const {data, error} = await supabase
                .from('consultations')
                .select('*')
                .order('created_at', {ascending: false})
                
    if (error) {
        throw error
    }

    return data ?? []
}

export const getAllMessages = async () => {
    const {data, error} = await supabase
                .from('contact_messages')
                .select('*')
                .order('created_at', {ascending: false})
                
    if (error) {
        throw error
    }

    return data ?? []
}