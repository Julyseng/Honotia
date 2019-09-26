
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('stories').del()
    .then(function () {
      // Inserts seed entries
      return knex('stories').insert([
        {id: 1, user_id: 2, date_created: 10/09/2018, story: 'The last thing I remember of Syria, before we left, was when my mother was taking me from our place to our grandparents. The roads were full of dead corpses. I saw dead people with no heads or no hands or legs. I was so shocked I couldn’t stop crying. To calm me down, my grandfather told me they were mean people, but I still prayed for them, because even if some considered them mean, they were still dead human beings. Back at home, I left a friend in Syria, her name was Rou’a. I miss her a lot and I miss going to school with her. I used to play with her with my Atari, but I couldn’t bring it with me. I also used to have pigeons, one of them had eggs, I would feed them and care for them. I’m worried about them, I really pray someone is still caring for them. But here I have a small kitten that I really love! I miss my home a lot. I hope one day we’ll be back and things will be just like before.' },
        {id: 2, user_id: 3, date_created: 12/07/2019, story: 'I am currently staying at a guesthouse for minors and families in Paiania, just outside Athens, Greece with my family. I’d like to go to Germany. We already know my family and I were granted permission to relocate to a German city. We are hoping to start a new page in our lives. I wish I could make people love each other — that is my dream.'},
        {id: 3, user_id: 5,date_created: 02/11/2019, story: 'We hid ourselves on the mountain for about eight nights. From the mountain, we saw a battle between [the violent group] and the PKK [Kurdish forces], who fought very courageously. After the sun set, we went to them. They treated us with much respect and took us to a place where there were lots of Yazidis and gave us food. Thus, after eight days of walking between the Iraq and Syrian borders, they helped us reach a quiet region in Northern Iraq. From there, we drove to Sulaymaniyah City.'}
      ]);
    });
};
