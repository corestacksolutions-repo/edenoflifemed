
const paychanguSecretKey = process.env.PAYCHANGU_SECRET_KEY
const frontendURL = process.env.FRONTEND_URL
const backendURL = process.env.BACKEND_API_URL

const createPayment = async (req, res) => {
    try {
        
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

        const result = response.json()
        console.log(result)

        const paymentUrl = result?.data?.checkout_url

        if (!paymentUrl) return res.json({
            success: false,
            message: `Failed to get payment link.`
        })

        res.json({paymentUrl})

    } catch (error) {
        return res.json({
            success: false,
            message: `Failed to connect to PayChangu's server: ${error}`
        })
    }
}

// const sayHello = () => {
//     console.log(`Hello Ray!`)
// }

export {createPayment};