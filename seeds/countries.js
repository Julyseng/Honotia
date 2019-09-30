
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('countries').del()
    .then(function () {
      // Inserts seed entries
      return knex('countries').insert([
        { id: 1 , name: "Afghanistan" },
        { id: 2 , name: "Algeria" },
        { id: 3 , name: "Bosnia" },
        { id: 4 , name: "Burma/Myanmar"  },
        { id: 5 , name: "Burundi" },
        { id: 6 , name: "Cambodia"  },
        { id: 7 , name: "China" },
        { id: 8 , name: "Columbia" },
        { id: 9 , name: "Djibouti" },
        { id: 10 , name: "Eritrea" },
        { id: 11 , name: "Ethiopia" },
        { id: 12 , name: "former Yugoslavia" },
        { id: 13 , name: "Iran"  },
        { id: 14 , name: "Iraq" },
        { id: 15 , name: "Kuwait" },
        { id: 16 , name: "Laos"  },
        { id: 17, name: "Nepal" },
        { id: 18 , name: "Palestine" },
        { id: 19 , name: "Republic of Congo" },
        { id: 20 , name: "Rwanda" },
        { id: 21 , name: "Sierra Leone" },
        { id: 22 , name: "Somalia" },
        { id: 23 , name: "Sri Lanka" },
        { id: 24 , name: "Syria" },
        { id: 25 , name: "the Democratic Republic of Congo" },
        { id: 26 , name: "the Sudan" },
        { id: 27 , name: "Tunisia" },
        { id: 28, name: "Vietnam"  },
        
      ]);
    });
};
