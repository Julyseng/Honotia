
exports.up = function(knex) {
    return knex.schema.createTable('stories', t => {
        t.increments('id').primary()
        t.integer('user_id')
        t.timestamp('date_created').defaultTo(knex.fn.now())
        t.text('story')
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('stories')
};
