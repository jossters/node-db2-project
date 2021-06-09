const Cars = require("./cars-model")
// const db = require("../../data/db-config")

async function checkCarId(req, res, next) {
  const { id } = req.params;
 try{
 const cars= await Cars.getById(id);
 if (!cars) {
   res.status(404).json({message: `car with id ${cars} is not found`})
 } else {
   console.log(req.cars)
   req.cars = cars
 }
 } catch (err) {
   next (err);
 }
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
  // checkCarPayload,
  // checkVinNumberValid,
  // checkVinNumberUnique,
}