
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, first_name: 'Nano', last_name: 'Zawaki' , birthday: 01/09/1990, current_city: 'Wellington', occupation: 'Teacher', interests: 'Football, Coding', email: 'zawaki@gmail.com', bio: 'Hi I am zawaki from Iran. Excited to be here in NZ.', user_type: 'new comer', password: '1234abc'},
        {id: 2, first_name: 'Yahya', last_name: 'Binmudah', birthday: 03/05/1980, current_city: 'Hamilton', occupation: 'Butcher', interests: 'Fishing, Reading, Tramping', email: 'yahya_78@gmail.com', bio: 'Father of two children.', user_type: 'new comer', password: 'abc123'},
        {id: 3, first_name: 'Khaing', last_name: 'Lin Kyi', birthday: 05/02/1989, current_city: 'Auckland', occupation: 'Hotel manager', interests: 'Reading, Cooking, Swimming' , email: 'kyikyi112@hotmail.com', bio: 'Lover of nature and reader.', user_type: 'former refugee', password: '321cba'},
        {id: 4, first_name: 'Lazaruth', last_name: 'Wazith', birthday: 30/10/1880, current_city: 'Christchurch', occupation: 'Pilot', interests: 'Traveling, Music, Social Enterprise' , email: 'wazithla007@yahoo.com', bio: 'Always love to get to know new people and being on the sky' , user_type: 'Ally', password: '007flyers'},
        {id: 5, first_name: 'Mae', last_name: 'La Mo', birthday: 12/18/1899, current_city: 'Parmeston North', occupation: 'Car machanic', interests: 'Singing, Cars, Roadtrips, Gaming', email: 'maemae123@gmail.com', bio: 'Always up for a good yarn. My friends say I am a good listener too.',user_type: 'Former Refugee', password: 'f@stcar010'},
        {id: 6, first_name: 'Samar', last_name: 'Alayyas', birthday: 07/02/1991, current_city: 'Wellington', occupation: 'Tour guide', interests: 'Arts, Drawing, History', email: 'samaryyes@gmail.com', bio: 'History is faacinating!', user_type: 'Ally', password: '12qsddv34'},

      ]);
    });
};
