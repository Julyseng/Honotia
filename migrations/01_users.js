exports.up = function(knex) {
  return knex.schema.createTable('users', t => {
    t.increments('id')
    t.string('firstName')
    t.string('lastName')
    t.string('DOB')
    t.string('currentCity')
    t.string('occupation')
    t.string('email')
    t.string('hash')
    t.text('bio')
    t.string('status')
    t.text('profileImg')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('users')
}
