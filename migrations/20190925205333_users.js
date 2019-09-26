
exports.up = function(knex) {
    return knex.schema.createTable('users', t => {
        t.increments('id')
        t.string('first_name')
        t.string('last_name')
        t.date('date_of_birth')
        t.string('current_city')
        t.string('occupation')
        t.string('interests')
        t.string('email')
        t.binary('hash')
        t.text('bio')
        t.string('user_status')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users')
};
