import {
    validationResult,
    matchedData
} from 'express-validator'

export const handleRequestValidation = (req, res, next) => {
    const results = validationResult(req)
    console.log(`this is from handleReqValidation: `, results)

    if (!results.isEmpty()) return res.status(400).send({
        Errors: results.array()
    })

    const validatedData = matchedData(req)
    console.log(`this is from handleReqValidation: `, validatedData)

    req.validatedData = validatedData

    next()
}