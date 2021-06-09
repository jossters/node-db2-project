const Cars = require("./cars-model")
const db = require("../../data/db-config")
const vinValidator = require('vin-validator');


async function checkCarId(req, res, next) {
 const { id } = req.params;
 try{
 const car = await Cars.getById(id);
 if (!car) {
   res.status(404).json()
 } else {
   req.car = car
   next()
 }
 } catch (err) {
   next (err);
 }
}

function checkCarPayload(req, res, next) {
  const {vin,make,model,mileage} = req.body;
  if (vin === undefined ) {
    res.status(400).json({ message: 'vin is missing'})
  } else if (make === undefined) {
    res.status(400).json({ message: 'make is missing'})
  } else if (model === undefined) {
    res.status(400).json({ message: 'model is missing'})
  } else if (mileage === undefined) {
    res.status(400).json({ message: 'mileage is missing'})
  } else {
    next();
  }
}

async function checkVinNumberValid(req, res, next) {
  const vin = req.body.vin
  try {
 const isValidVin = vinValidator.validate(vin)
if (!isValidVin) {
  res.status(400).json({ message: `vin ${vin} is invalid` })
} else {
  req.isValidVin = isValidVin
  next()
}
  }catch (err) {
    next(err)
  }
  
}

async function checkVinNumberUnique(req, res, next) {
  const vin = req.body.vin
  try {
    const vinUnique = await Cars.getByVin(vin)
if (vinUnique) {
 res.status(400).json({ message: `vin ${vin} already exists` })
} else {
  next()
}
  } catch (err){
next(err)
  }
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
}