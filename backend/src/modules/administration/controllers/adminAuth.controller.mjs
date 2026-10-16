import * as adminService from '../services/adminAuth.service.mjs'

export const adminLoginAuth = async (req, res, next) => {
    try {
        const {email, password} = req.body

        const loggingIn = await adminService
                            .createAdminInstance({
                                email,
                                password
                            })

        if (!loggingIn) throw new Error(`Invalid Credentials. Please Try Again!`)
        
        return res.json({
            success: true,
            token: loggingIn
        })
    } catch (error) {
        return next(error)
    }
}

export const adminGetAppointments = async (req, res, next) => {
    try {
        const appointments = await adminService
                        .adminGetAppointments()
                        
        return res.json({
            success: true,
            data: appointments,
            count: appointments.length
        })
    } catch (error) {
        return next(error)
    }    
}

export const adminGetConsultations = async (req, res, next) => {
    try {
        const consultations = await adminService
                        .adminGetAppointments()

        return res.json({
            success: true,
            data: consultations,
            count: consultations.length
        })
    } catch (error) {
        return next(error)
    }    
}

export const adminGetContactMessages = async (req, res, next) => {
    try {
        const messages = await adminService
                            .adminGetContactMessages()

        return res.json({
            success: true,
            data: messages,
            count: messages.length
        })
    } catch (error) {
        return next(error)
    }    
}