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
          DOB: 01 / 09 / 1990,
          currentCity: 'Wellington',
          occupation: 'Teacher',
          email: 'zawaki@gmail.com',
          bio: 'Hi I am zawaki from Iran. Excited to be here in NZ.',
          status: 'Newly arrived Refugee',
          profileImg:
            'https://www.meme-arsenal.com/memes/6461043e803d5765fc4c65b1726a3488.jpg'
        },
        {
          id: 2,
          firstName: 'Yahya',
          lastName: 'Binmudah',
          DOB: 03 / 05 / 1980,
          currentCity: 'Hamilton',
          occupation: 'Butcher',
          email: 'yahya_78@gmail.com',
          bio: 'Father of two children.',
          status: 'Newly arrived Refugee',
          profileImg:
            'https://www.meme-arsenal.com/memes/6461043e803d5765fc4c65b1726a3488.jpg'
        },
        {
          id: 3,
          firstName: 'Khaing',
          lastName: 'Lin Kyi',
          DOB: 05 / 02 / 1989,
          currentCity: 'Auckland',
          occupation: 'Hotel manager',
          email: 'kyikyi112@hotmail.com',
          bio: 'Lover of nature and reader.',
          status: 'former refugee',
          profileImg:
            'https://www.meme-arsenal.com/memes/6461043e803d5765fc4c65b1726a3488.jpg'
        },
        {
          id: 4,
          firstName: 'Lazaruth',
          lastName: 'Wazith',
          DOB: 30 / 10 / 1880,
          currentCity: 'Christchurch',
          occupation: 'Pilot',
          email: 'wazithla007@yahoo.com',
          bio: 'Always love to get to know new people and being on the sky',
          status: 'Ally',
          profileImg:
            'https://www.meme-arsenal.com/memes/6461043e803d5765fc4c65b1726a3488.jpg'
        },
        {
          id: 5,
          firstName: 'Mae',
          lastName: 'La Mo',
          DOB: 12 / 18 / 1899,
          currentCity: 'Parmeston North',
          occupation: 'Car machanic',
          email: 'maemae123@gmail.com',
          bio:
            'Always up for a good yarn. My friends say I am a good listener too.',
          status: 'Former Refugee',
          profileImg:
            'https://www.meme-arsenal.com/memes/6461043e803d5765fc4c65b1726a3488.jpg'
        },
        {
          id: 6,
          firstName: 'Samar',
          lastName: 'Alayyas',
          DOB: 07 / 02 / 1991,
          currentCity: 'Wellington',
          occupation: 'Tour guide',
          email: 'samaryyes@gmail.com',
          bio: 'History is faacinating!',
          status: 'Ally',
          profileImg:
            'https://www.meme-arsenal.com/memes/6461043e803d5765fc4c65b1726a3488.jpg'
        }
      ])
    })
}
