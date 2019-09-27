
exports.up = function(knex) {
    return knex.schema.createTable('countries', t =>{
        t.increments('id')
        t.string('nameOfCountry')
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('countries')
  
};
