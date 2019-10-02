exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('refugees')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('refugees').insert([
        {
          user_id: 1,
          country: 'Burma/Myanmar',
          yearLeft: 1990,
          reasonForLeaving: 'War or conflict',
          yearOfArrival: 2019
        },
        {
          user_id: 2,
          country: 'Syria',
          yearLeft: 1998,
          reasonForLeaving: 'Religious persecution',
          yearOfArrival: 2002
        },
        {
          user_id: 3,
          country: 'Vietnam',
          yearLeft: 2001,
          reasonForLeaving: 'Political persecution',
          yearOfArrival: 1999
        },
        {
          user_id: 4,
          country: 'China',
          yearLeft: 2008,
          reasonForLeaving: 'Human rights persecution',
          yearOfArrival: 2005
        },
        {
          user_id: 5,
          country: 'Afghanistan',
          yearLeft: 2003,
          reasonForLeaving: 'Economic reasons',
          yearOfArrival: 2008
        },
        {
          user_id: 6,
          country: 'Colombia',
          yearLeft: 2005,
          reasonForLeaving: 'Climate change',
          yearOfArrival: 2009
        }
      ])
    })
}
