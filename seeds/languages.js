
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('languages').del()
    .then(function () {
      // Inserts seed entries
      return knex('languages').insert([
        {id: 1, language: 'English'},
        {id: 2, language: 'Spanish'},
        {id: 3, language: 'Burmese'},
        {id: 4, language: 'Arabic'},
        {id: 5, language: 'Tamil'},
        {id: 6, language: 'Shona'}
      ]);
    });
};
