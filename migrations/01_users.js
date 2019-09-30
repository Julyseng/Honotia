
exports.up = function(knex) {
    return knex.schema.createTable('users', t => {
        t.increments('id')
        t.string('firstName')
        t.string('lastName')
        t.string('dob')
        t.string('currentCity')
        t.string('occupation')
        t.string('email')
        t.string('hash')
        t.string('bio')
        t.string('userStatus')
        t.string('profileImg')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users')
};
