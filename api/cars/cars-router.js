const router = require('express').Router()
const Cars = require('./cars-model')

const {checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique} = require("./cars-middleware")

router.get('/', async (req, res, next) => {
    try {
        const data = await Cars.getAll()
        res.json(data)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', checkCarId, async (req, res, next) => {
    try {
   const cars = await Cars.getById(req.params.id)
   res.json(cars)
    } catch (err) {
      next(err)
    }
})

router.post('/', checkCarPayload, checkVinNumberValid, checkVinNumberUnique, async (req, res, next) => {
    try {
     const data = await Cars.create(req.body)
     res.status(201).json(data)
    } catch (err) {
        next(err)
    }
})

module.exports = router;