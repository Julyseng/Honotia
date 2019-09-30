
exports.up = function(knex) {
    return knex.schema.createTable('refugees', t => {
        t.increments('id')
        t.integer('user_id')
        t.string('country')
        t.integer('yearLeft')
        t.string('reasonForLeaving')
        t.integer('yearOfArrival')        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('refugees')
};
