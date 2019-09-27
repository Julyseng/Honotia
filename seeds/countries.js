
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('countries').del()
    .then(function () {
      // Inserts seed entries
      return knex('countries').insert([
        { id: 1 , nameOfCountry: "Afghanistan" },
        { id: 2 , nameOfCountry: "Algeria" },
        { id: 3 , nameOfCountry: "Bosnia" },
        { id: 4 , nameOfCountry: "Burma/Myanmar"  },
        { id: 5 , nameOfCountry: "Burundi" },
        { id: 6 , nameOfCountry: "Cambodia"  },
        { id: 7 , nameOfCountry: "China" },
        { id: 8 , nameOfCountry: "Columbia" },
        { id: 9 , nameOfCountry: "Djibouti" },
        { id: 10 , nameOfCountry: "Eritrea" },
        { id: 11 , nameOfCountry: "Ethiopia" },
        { id: 12 , nameOfCountry: "former Yugoslavia" },
        { id: 13 , nameOfCountry: "Iran"  },
        { id: 14 , nameOfCountry: "Iraq" },
        { id: 15 , nameOfCountry: "Kuwait" },
        { id: 16 , nameOfCountry: "Laos"  },
        { id: 17, nameOfCountry: "Nepal" },
        { id: 18 , nameOfCountry: "Palestine" },
        { id: 19 , nameOfCountry: "Republic of Congo" },
        { id: 20 , nameOfCountry: "Rwanda" },
        { id: 21 , nameOfCountry: "Sierra Leone" },
        { id: 22 , nameOfCountry: "Somalia" },
        { id: 23 , nameOfCountry: "Sri Lanka" },
        { id: 24 , nameOfCountry: "Syria" },
        { id: 25 , nameOfCountry: "the Democratic Republic of Congo" },
        { id: 26 , nameOfCountry: "the Sudan" },
        { id: 27 , nameOfCountry: "Tunisia" },
        { id: 28, nameOfCountry: "Vietnam"  },
        
      ]);
    });
};
