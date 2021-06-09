exports.seed = function (knex) {
    return knex('cars').truncate()
    .then(function () {
        return knex('cars').insert([
            {vin:'2T3BF4DV3CW230314', make:'Nissan', model:'Sentra', mileage:5000, title:'Clean', transmission:'Automatic'},
            {vin:'ML32A4HJ0FH091889', make:'Chevy', model:'Tahoe', mileage:200000, title:'Clean', transmission:'Automatic'},
            {vin:'1G8AG52F43Z178437', make:'BMW', model:'525i', mileage:150000, title:'Clean', transmission:'Manual'}
        ])
    })
}
