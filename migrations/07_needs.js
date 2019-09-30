
exports.up = function(knex) {
    return knex.schema.createTable('needs', t => {
        t.increments('id')
        t.string('needs')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('needs')
};
