
exports.up = function(knex) {
    return knex.schema.createTable('reasonFL', t => {
        t.increments('id')
        t.string('reason')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('reasonFL')
  
};
