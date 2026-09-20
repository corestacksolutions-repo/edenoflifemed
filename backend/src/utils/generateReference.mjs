import crypto from 'crypto'

export const generateReference = () => {
    return `EDENAM-${crypto.randomBytes(8).toString('hex')}`
}