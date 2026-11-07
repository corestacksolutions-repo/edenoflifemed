
const paychanguSecretKey = process.env.PAYCHANGU_SECRET_KEY


const createPayment = async (req, res) => {
        
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

        const paymentCreationPayload = result.json()
        console.log(paymentCreationPayload)

        const paymentUrl = paymentCreationPayload?.data?.checkout_url

        if (!paymentUrl) return res.json({
            success: false,
            message: `Failed to get payment link.`
        })

        res.json({paymentUrl})


}

// const sayHello = () => {
//     console.log(`Hello Ray!`)
// }

export {createPayment};