import express from 'express'
import cors from 'cors'
import barrelRoute from './modules/bookings & contact/routes/barrel.route.mjs'
import { errorHandler } from './middlewares/errorHandler.mjs'
import adminBarrelRouter from './modules/administration/routes/adminBarrel.route.mjs'

const app = express()
const PORT = process.env.PORT || 8383

const frontendOrigins = [
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:5177",
    process.env.FRONTEND_URL,
    process.env.ADMIN_URL
].filter(Boolean)


app.use(
    cors({
        origin: frontendOrigins,
        methods: ['POST', 'GET'],
        credentials: true
    })
)
app.use(express.json())


app.use('/api', barrelRoute)
app.use('/api', adminBarrelRouter)

app.use(errorHandler)


app.get('/api/health', (req, res) => {
    res.status(200).send({
        msg: `Express server seems to be healthy`
    })
})


app.listen(PORT, () => {
    console.log(`Express server listening from port ${PORT}`)
})