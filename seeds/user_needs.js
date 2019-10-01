
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_needs').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_needs').insert([
        {user_id: 1, needs_id: 1},
        {user_id: 2, needs_id: 2},
        {user_id: 3, needs_id: 3},
        {user_id: 4, needs_id: 1},
        {user_id: 5, needs_id: 2},
        {user_id: 6, needs_id: 3},
        {user_id: 1, needs_id: 5},
        {user_id: 2, needs_id: 4},
        {user_id: 3, needs_id: 6}
      ]);
    });
};
