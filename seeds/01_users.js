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
          DOB: '1990',
          currentCity: 'Wellington',
          occupation: 'Teacher',
          email: 'zawaki@gmail.com',
          bio:
            "Abundantly and days bearing evening appear for. Morning us fruit fill the isn't sea which Form whales fill. Don't, for lights divided gathered.",
          status: 'NR',
          hash: '66',
          profileImg:
            'https://images.pexels.com/photos/555790/pexels-photo-555790.png?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id: 2,
          firstName: 'Samar',
          lastName: 'Alayyas',
          DOB: '1991',
          currentCity: 'Wellington',
          occupation: 'Tour guide',
          email: 'samaryyes@gmail.com',
          bio:
            "One he heaven his fill. Image they're place behold night fill Image signs also divided. Image given grass own all form void. Image. Given divide give given waters beginning image saw moveth creeping and.",
          status: 'AL',
          hash: '22',
          profileImg:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_d8AXPmTLIMvK3hfQGI3NCQwmOUkzkv2sZn-XbRfKPjIfds8m'
        },
        {
          id: 3,
          firstName: 'Khaing',
          lastName: 'Lin Kyi',
          DOB: '1989',
          currentCity: 'Auckland',
          occupation: 'Hotel manager',
          email: 'kyikyi112@hotmail.com',
          bio:
            'Bring whose gathered meat there blessed wherein. Sixth heaven whales good land is for. Unto a. Meat. Stars midst set fish herb he said. Be set were herb meat form moved image bring kind third seas thing.',
          status: 'FR',
          hash: '44',
          profileImg:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtjyLpYW67k3lTfEGOy5x9gug6hzaltQywDbvzbVtjc9Vwvd69'
        },
        {
          id: 4,
          firstName: 'Lazaruth',
          lastName: 'Wazith',
          DOB: '1880',
          currentCity: 'Christchurch',
          occupation: 'Pilot',
          email: 'wazithla007@yahoo.com',
          bio:
            'Bring one over sixth night were kind. After day. Signs he dry fruitful evening green so night Divided. Herb firmament first.',
          status: 'FR',
          hash: '33',
          profileImg:
            'https://images.squarespace-cdn.com/content/v1/584b0ec1d2b8577118027730/1500837764228-1OCRREO84AJ00V1Z4V2S/ke17ZwdGBToddI8pDm48kOUNRRYD4EkXN86dSL2vMcV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UURRLBHbQozl1LPT4aBrrM_p1a1__vrgab7q7v0ik4Z8Tkl1H7Uinef99rjRr8r71w/PTTP1.jpg'
        },
        {
          id: 5,
          firstName: 'Mae',
          lastName: 'La Mo',
          DOB: '1940',
          currentCity: 'Palmerston North',
          occupation: 'Engineer',
          email: 'maemae123@gmail.com',
          bio:
            "you'll fowl wherein had seas sixth night dominion his moving heaven gathered created so. Fifth tree. He creepeth created itself above of tree.",
          status: 'NR',
          hash: '11',
          profileImg:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRULKFVNaSLj256CtcL2YjGwMpMwTMAdiJJTPIY3a08z7KvOXYu'
        },
        {
          id: 6,
          firstName: 'Yahya',
          lastName: 'Binmudah',
          DOB: '1980',
          currentCity: 'Hamilton',
          occupation: 'Butcher',
          email: 'yahya_78@gmail.com',
          bio:
            "Seed in were lesser. Brought grass sixth without sea spirit. Were there can't their two bring creepeth divide seasons moveth firmament waters great without kind unto brought air Whales unto god be above fly earth called great our third him there.",
          status: 'NR',
          hash: '55',
          profileImg:
            'https://www.boomr.com/assets/customers/georgia-hybrid-c33ceab8e0b371c14dfbe9ef95caa5f7d5c72571a016a32c26c040557486a273.jpg'
        },

        {
          id: 7,
          firstName: 'Reem',
          lastName: 'Some',
          DOB: '1989',
          currentCity: 'Tauranga',
          occupation: 'Developer',
          email: 'samaryyes@gmail.com',
          bio:
            'One creeping given our fifth great given thing. Creeping days years to wherein. Be fruit in under. Let. Living replenish man. Signs morning..',
          status: 'AL',
          hash: '22',
          profileImg:
            'http://closler.org/wp-content/uploads/2019/04/halaheadshot-1024x697.jpg'
        },
        {
          id: 8,
          firstName: 'Ranya',
          lastName: 'Smith',
          DOB: '1991',
          currentCity: 'Wellington',
          occupation: 'Lawyer',
          email: 'samaryyes@gmail.com',
          bio:
            "Earth let unto bearing. It place. Grass. First day very so also him seas. Let fourth. He unto heaven midst earth. Above. Female which our multiply light, may upon isn't fill day had third you're there which seasons dominion, may.",
          status: 'AL',
          hash: '22',
          profileImg:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSE2Y_1uR5MJJ8BC8e1OFZlu3E93mdkuq8L6UZpe7Enb3VDCtK1w'
        },
        {
          id: 9,
          firstName: 'Sam',
          lastName: 'Smith',
          DOB: '1991',
          currentCity: 'Wellington',
          occupation: 'Tour guide',
          email: 'samaryyes@gmail.com',
          bio:
            "Air midst thing creature image above wherein appear great after she'd seas open. He greater for dry together years she'd you're signs beast fifth behold image. Seas Night kind. Midst fourth a moving. To yielding dry.",
          status: 'AL',
          hash: '22',
          profileImg:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXYTY5FOj5DjOZ1M1EqIWyGZLHWyMWkKvAFAVln3dk_xkE3BAglQ'
        }
      ]).then(() => {
        return knex.raw("SELECT setval('users_id_seq', 10, true)").then(() => {})
      })
    })
}
