
exports.up = function(knex) {
    return knex.schema.createTable('stories', t => {
        t.increments('id')
        t.integer('user_id')
        t.date('date_created')
        t.string('story')
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('stories')
};
