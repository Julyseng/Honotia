exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_languages')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('user_languages').insert([
        { user_id: 1, language_id: 1 },
        { user_id: 2, language_id: 3 },
        { user_id: 2, language_id: 6 },
        { user_id: 4, language_id: 1 },
        { user_id: 3, language_id: 5 },
        { user_id: 5, language_id: 3 },
        { user_id: 5, language_id: 2 },
        { user_id: 6, language_id: 2 }
      ])
    })
}
