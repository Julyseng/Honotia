
exports.up = function(knex) {
    return knex.schema.createTable('user_languages', t =>{
        t.integer('user_id')
        t.integer('language_id')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('user_languages')

};
