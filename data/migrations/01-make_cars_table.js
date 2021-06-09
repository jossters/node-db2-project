exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments('id');
        tbl.string('vin').unique().notNullable();
        tbl.string('make').notNullable();
        tbl.string('model').notNullable();
        tbl.decimal('mileage').notNullable();
        tbl.string('title');
        tbl.string('transmission');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars')
};

// exports.up = function(knex, Promise) {
//     return knex.schema.createTable('accounts', tbl => {
//       tbl.increments();
//       tbl.string('name')
//         .notNullable()
//         .unique();
//       tbl.decimal('budget')
//         .notNullable();
//     });
//   };
  
//   exports.down = function(knex, Promise) {
//     return knex.schema.dropTableIfExists('accounts');
//   };