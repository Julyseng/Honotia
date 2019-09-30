exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          firstName: 'Nano',
          lastName: 'Zawaki',
          dob: '1990',
          currentCity: 'Wellington',
          occupation: 'Teacher',
          email: 'zawaki@gmail.com',
          bio: 'Hi I am zawaki from Iran. Excited to be here in NZ.',
          userStatus: 'Newly arrived Refugee',
          hash: '1234abc',
          profileImg: 'https://www.meme-arsenal.com/memes/6461043e803d5765fc4c65b1726a3488.jpg'
        },
        {
          id: 2,
          firstName: 'Yahya',
          lastName: 'Binmudah',
          dob: '1989',
          currentCity: 'Hamilton',
          occupation: 'Butcher',
          email: 'yahya_78@gmail.com',
          bio: 'Father of two children.',
          userStatus: 'Newly arrived Refugee',
          hash: 'abc123',
          profileImg: 'https://www.meme-arsenal.com/memes/6461043e803d5765fc4c65b1726a3488.jpg'
        },
        {
          id: 3,
          firstName: 'Khaing',
          lastName: 'Lin Kyi',
          dob: '1993',
          currentCity: 'Auckland',
          occupation: 'Hotel manager',
          email: 'kyikyi112@hotmail.com',
          bio: 'Lover of nature and reader.',
          userStatus: 'former refugee',
          hash: '321cba',
          profileImg: 'https://www.meme-arsenal.com/memes/6461043e803d5765fc4c65b1726a3488.jpg'
        },
        {
          id: 4,
          firstName: 'Lazaruth',
          lastName: 'Wazith',
          dob: '1998',
          currentCity: 'Christchurch',
          occupation: 'Pilot',
          email: 'wazithla007@yahoo.com',
          bio: 'Always love to get to know new people and being on the sky',
          userStatus: 'Ally',
          hash: '007flyers',
          profileImg: 'https://www.meme-arsenal.com/memes/6461043e803d5765fc4c65b1726a3488.jpg'
        },
        {
          id: 5,
          firstName: 'Mae',
          lastName: 'La Mo',
          dob: '1890',
          currentCity: 'Parmeston North',
          occupation: 'Car machanic',
          email: 'maemae123@gmail.com',
          bio:
            'Always up for a good yarn. My friends say I am a good listener too.',
          userStatus: 'Former Refugee',
          hash: 'f@stcar010',
          profileImg: 'https://www.meme-arsenal.com/memes/6461043e803d5765fc4c65b1726a3488.jpg'
        },
        {
          id: 6,
          firstName: 'Samar',
          lastName: 'Alayyas',
          dob: '1899',
          currentCity: 'Wellington',
          occupation: 'Tour guide',
          email: 'samaryyes@gmail.com',
          bio: 'History is faacinating!',
          userStatus: 'Ally',
          hash: '12qsddv34',
          profileImg: 'https://www.meme-arsenal.com/memes/6461043e803d5765fc4c65b1726a3488.jpg'
        }
      ])
    })
}
