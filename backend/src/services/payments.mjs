
const paychanguSecretKey = process.env.PAYCHANGU_SECRET_KEY


const createPayment = async () => {
        
        const response = await fetch("https://api.paychangu.com/payment", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${paychanguSecretKey}`
            },
            body: JSON.stringify({
                amount: payload.booking_fee,
                currency: 'MWK',
                email: payload.email ? payload.email : '',
                first_name: payload.full_name,
                last_name: payload.full_name,
                callback_url: `https://edenoflifemed.vercel.app/appointment?ref=${patient_reference}`,
                return_url: `https://edenoflifemed.onrender.com/webhook`,
                tx_ref: patient_reference
            })
        })

        return response


}

// const sayHello = () => {
//     console.log(`Hello Ray!`)
// }

export {createPayment};