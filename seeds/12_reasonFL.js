
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('reasonFL').del()
    .then(function () {
      // Inserts seed entries
      return knex('reasonFL').insert([
        {id: 1, reason: 'War or conflict'},
        {id: 2, reason: 'Religious persecution'},
        {id: 3, reason: 'Political instability'},
        {id: 4, reason: 'Human rights violation'},
        {id: 5, reason: 'Expulsion'},
        {id: 6, reason: 'Poverty'},
        {id: 7, reason: 'Anti-semitism'},
        {id: 8, reason: 'Climate change'},
        {id: 9, reason: 'National persecution'},

      ]);
    });
};
