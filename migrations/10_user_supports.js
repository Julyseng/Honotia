
exports.up = function(knex) {
    return knex.schema.createTable('user_support', t => {
        t.integer('user_id')
        t.string('supports_id')
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('user_support')
};
