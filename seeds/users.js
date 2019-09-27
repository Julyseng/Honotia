exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          firstName: 'Nano',
          lastName: 'Zawaki',
          dob: 01 / 09 / 1990,
          currentCity: 'Wellington',
          occupation: 'Teacher',
          email: 'zawaki@gmail.com',
          bio: 'Hi I am zawaki from Iran. Excited to be here in NZ.',
          userStatus: 'new comer',
          hash: '1234abc',
          userImg: ''

        },
        {
          id: 2,
          firstName: 'Yahya',
          lastName: 'Binmudah',
          dob: 03 / 05 / 1980,
          currentCity: 'Hamilton',
          occupation: 'Butcher', 
          email: 'yahya_78@gmail.com',
          bio: 'Father of two children.',
          userStatus: 'new comer',
          hash: 'abc123',
          userImg: ''
        },
        {
          id: 3,
          firstName: 'Khaing',
          lastName: 'Lin Kyi',
          dob: 05 / 02 / 1989,
          currentCity: 'Auckland',
          occupation: 'Hotel manager',
          email: 'kyikyi112@hotmail.com',
          bio: 'Lover of nature and reader.',
          userStatus: 'former refugee',
          hash: '321cba',
          userImg: ''
        },
        {
          id: 4,
          firstName: 'Lazaruth',
          lastName: 'Wazith',
          dob: 30 / 10 / 1880,
          currentCity: 'Christchurch',
          occupation: 'Pilot',
          email: 'wazithla007@yahoo.com',
          bio: 'Always love to get to know new people and being on the sky',
          userStatus: 'Ally',
          hash: '007flyers',
          userImg: ''
        },
        {
          id: 5,
          firstName: 'Mae',
          lastName: 'La Mo',
          dob: 12 / 18 / 1899,
          currentCity: 'Parmeston North',
          occupation: 'Car machanic',
          email: 'maemae123@gmail.com',
          bio:
            'Always up for a good yarn. My friends say I am a good listener too.',
          userStatus: 'Former Refugee',
          hash: 'f@stcar010',
          userImg: ''
        },
        {
          id: 6,
          firstName: 'Samar',
          lastName: 'Alayyas',
          dob: 07 / 02 / 1991,
          currentCity: 'Wellington',
          occupation: 'Tour guide',
          email: 'samaryyes@gmail.com',
          bio: 'History is faacinating!',
          userStatus: 'Ally',
          hash: '12qsddv34',
          userImg: ''
        }
      ])
    })
}
