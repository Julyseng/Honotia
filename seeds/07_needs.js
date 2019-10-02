
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('needs').del()
    .then(function () {
      // Inserts seed entries
      return knex('needs').insert([
        {id: 1, needs: 'Health Care'},
        {id: 2, needs: 'Education'},
        {id: 3, needs: 'Social Support'},
        {id: 4, needs: 'Housing'},
        {id: 5, needs: 'Employment'},
        {id: 6, needs: 'Transport'},
        {id: 7, needs: 'Mentor'},
        {id: 8, needs: 'Business'}
      ]).then(() => {
        return knex.raw("SELECT setval('needs_id_seq', 9, true)").then(() => {})
      })
    });
};
