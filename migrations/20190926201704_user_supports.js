
exports.up = function(knex) {
    return knex.schema.createTable('user_support', t => {
        t.increments('id')
        t.string('supports_id')
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('user_support')
};
