
exports.up = function(knex) {
    return knex.schema.createTable('languages', t => {
        t.increments('id')
        t.string('language')
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('language')
  
};
