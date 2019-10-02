
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('reasonFL').del()
    .then(function () {
      // Inserts seed entries
      return knex('reasonFL').insert([
        {reason: 'War or conflict'},
        {reason: 'Religious persecution'},
        {reason: 'Political instability'},
        {reason: 'Human rights violation'},
        {reason: 'Expulsion'},
        {reason: 'Poverty'},
        {reason: 'Anti-semitism'},
        {reason: 'Climate change'},
        {reason: 'National persecution'},
      ]);
    });
};
