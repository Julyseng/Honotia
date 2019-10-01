
exports.up = function(knex) {
    return knex.schema.createTable('user_needs', t => {
        t.integer('user_id').references('users.id')
        t.integer('needs_id').references('needs.id')
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('user_needs')
};
