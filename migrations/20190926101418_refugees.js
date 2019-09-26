
exports.up = function(knex) {
    return knex.schema.createTable('refugees', t => {
        t.increments('id')
        t.integer('user_id')
        t.string('ethnicity')
        t.string('country')
        t.integer('year_left')
        t.string('reason_for_leaving')
        t.integer('year_of_arrival')        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('refugees')
};
