
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('supports').del()
    .then(function () {
      // Inserts seed entries
      return knex('supports').insert([
        {id: 1, supports: 'Health Care'},
        {id: 2, supports: 'Education'},
        {id: 3, supports: 'Social Support'},
        {id: 4, supports: 'Housing'},
        {id: 5, supports: 'Employment'},
        {id: 6, supports: 'Transport'},
        {id: 7, supports: 'Mentor'},
        {id: 8, supports: 'Business'}
      ]);
    });
};
