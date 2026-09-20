import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config()

const supabaseURL = process.env.SUPABASE_URL
const supabasePublicKey = process.env.SUPABASE_SERVICE_ROLE_KEY

export const supabase = createClient(
    supabaseURL,
    supabasePublicKey
)