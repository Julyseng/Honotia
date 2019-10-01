
exports.up = function(knex) {
    return knex.schema.createTable('stories', t => {
        t.increments('id').primary()
        t.integer('user_id')
        t.string('title')
        t.date('dateCreated')
        t.text('story')
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('stories')
};
