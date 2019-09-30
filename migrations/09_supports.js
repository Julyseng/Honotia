
exports.up = function(knex) {
    return knex.schema.createTable('supports', t => {
        t.increments('id')
        t.string('supports').references()
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('supports')
};
