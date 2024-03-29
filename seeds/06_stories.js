exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('stories')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('stories').insert([
        {
          user_id: 2,
          title: 'My journey to NZ',
          dateCreated: '2019-08-26',
          story:
            'The last thing I remember of Syria, before we left, was when my mother was taking me from our place to our grandparents. The roads were full of dead corpses. I saw dead people with no heads or no hands or legs. I was so shocked I couldn’t stop crying. To calm me down, my grandfather told me they were mean people, but I still prayed for them, because even if some considered them mean, they were still dead human beings. Back at home, I left a friend in Syria, her name was Rou’a. I miss her a lot and I miss going to school with her. I used to play with her with my Atari, but I couldn’t bring it with me. I also used to have pigeons, one of them had eggs, I would feed them and care for them. I’m worried about them, I really pray someone is still caring for them. But here I have a small kitten that I really love! I miss my home a lot. I hope one day we’ll be back and things will be just like before.'
        },
        {
          user_id: 3,
          title: 'Love, War and Life',
          dateCreated: '2018-09-14',
          story:
            'I left home with the dream of getting to Europe, where I was told I would easily find a job which would mean I would be able to look after my siblings. My mother died when I was very young and our father basically abandoned us as he could not, or did not want to, take care of us. I felt I had no choice but to leave Ghana and try my luck in Europe. After months of travelling through West Africa by whatever means, I eventually made it to Libya, where I paid €800 to men who promised they would put me on a big boat that would finally take me to Europe. It is difficult to explain and I have bad memories about this, but I had a terrible time in Libya. Those of us from certain African countries were treated very badly by men who kept us in dirty houses without much clean water and with very little edible food. They were very abusive and they seemed to enjoy the way they treated us. It did not matter to them that we had paid them all this money.'
        },
        {
          user_id: 5,
          title: 'Never Fall Down',
          dateCreated: '2018-09-26',
          story:
            'We hid ourselves on the mountain for about eight nights. From the mountain, we saw a battle between [the violent group] and the PKK [Kurdish forces], who fought very courageously. After the sun set, we went to them. They treated us with much respect and took us to a place where there were lots of Yazidis and gave us food. Thus, after eight days of walking between the Iraq and Syrian borders, they helped us reach a quiet region in Northern Iraq. From there, we drove to Sulaymaniyah City.'
        }
      ])
    })
}
