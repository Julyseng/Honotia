
exports.up = function(knex) {
    return knex.schema.createTable('users', t => {
        t.increments('id')
        t.string('first-name')
        t.string('last-name')
        t.date('birthday')
        t.string('current_city')
        t.string('occupation')
        t.string('interests')
        t.string('email')
        t.string('bio')
        t.string('user_type')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users')
};
