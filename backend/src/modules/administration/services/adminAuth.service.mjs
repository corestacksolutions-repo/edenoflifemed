import jwt from 'jsonwebtoken'
import * as adminRepository from '../repositories/adminAuth.repositories.mjs'

export const createAdminInstance = async ({ email, password }) => {
  if (
    email !== process.env.ADMIN_EMAIL ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    throw new Error('Invalid credentials. Please try again!');
  }

  const token = jwt.sign(
    { email },
    process.env.JWT_SECRET_KEY,
    { expiresIn: '2h' }
  );

  return token;
};


export const adminGetAppointments = () => {
    const appointments = adminRepository.getAllAppointments()

    if (!appointments) throw new Error(`Error occured while getting appointments data`)

    return appointments
}

export const adminGetConsultations = () => {
    const consultations = adminRepository.getAllConsultations()

    if (!consultations) throw new Error(`Error occured while getting consultations data`)

    return consultations
}

export const adminGetContactMessages = () => {
    const messages = adminRepository.getAllMessages()

    if (!messages) throw new Error(`Error occured while getting contact messages data`)

    return messages
}