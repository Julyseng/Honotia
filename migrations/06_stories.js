
exports.up = function(knex) {
    return knex.schema.createTable('stories', t => {
        t.increments('id').primary()
        t.integer('user_id')
        t.timestamp('dateCreated').defaultTo(knex.fn.now())
        t.text('story')
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('stories')
};
