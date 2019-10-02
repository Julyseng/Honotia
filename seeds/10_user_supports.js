exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_support')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('user_support').insert([
        { user_id: 1, supports_id: 1 },
        { user_id: 2, supports_id: 2 },
        { user_id: 3, supports_id: 3 },
        { user_id: 4, supports_id: 1 },
        { user_id: 5, supports_id: 4 },
        { user_id: 6, supports_id: 6 },
        { user_id: 6, supports_id: 5 }
      ])
    })
}
