import dotenv from 'dotenv'

dotenv.config()

const frontEndUrl = process.env.FRONTEND_URL

export const errorHandler = (error, req, res, next) => {

    console.error(error)

    return res.status(500).json({
        success: false,
        message: error.message || 'Internal server error',
        details: error.details || null,
        hint: error.hint || null,
        code: error.code || null,
        redirectUrl: `${frontEndUrl}/booking-failed?reason=${message}`
    })
}