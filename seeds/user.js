
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, first_name: 'Nano'},
        {id: 2, first_name: 'Lang'},
        {id: 3, first_name: 'Nina'},
        {id: 1, first_name: 'Lulu'},
        {id: 2, first_name: 'Sandy'},
        {id: 3, first_name: 'Moe'},

      ]);
    });
};
