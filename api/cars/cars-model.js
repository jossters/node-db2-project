const db = require("../../data/db-config")
const getAll = () => {
  return db ("cars")
}

async function getById (id) {
  const result = await db('cars')
  .where('id', id).first()
  return result
}

async function create({vin,make,model,mileage,title,transmission}) {
  const [id] = await db('cars')
  .insert({vin,make,model,mileage,title,transmission})
  return getById(id)
}

function getByVin(vin){
  return db ('cars').where('vin',vin).first()
}

module.exports = {
  getAll,
  getById,
  create,
  getByVin
}