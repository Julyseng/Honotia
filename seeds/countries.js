
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('countries').del()
    .then(function () {
      // Inserts seed entries
      return knex('countries').insert([
        { id: 1, nameOfCountry: "Afghanistan" },
        { id: 2, nameOfCountry: "Algeria" },
        { id: 3, nameOfCountry: "Bosnia" },
        { id: 4, nameOfCountry: "Burma/Myanmar" },
        { id: 5, nameOfCountry: "Burundi" },
        { id: 6, nameOfCountry: "Cabodia" },
        { id: 7, nameOfCountry: "China" },
        { id: 8, nameOfCountry: "Columbia" },
        { id: 9, nameOfCountry: "Djibouti" },
        { id: 10, nameOfCountry: "Eritrea" },
        { id: 11, nameOfCountry: "Ethiopia" },
        { id: 12, nameOfCountry: "former Yugoslavia" },
        { id: 13, nameOfCountry: "Iran" },
        { id: 14, nameOfCountry: "Iraq" },
        { id: 15, nameOfCountry: "Kuwait" },
        { id: 16, nameOfCountry: "Laos" },
        { id: 17, nameOfCountry: "Palestine" },
        { id: 18, nameOfCountry: "Republic of Congo" },
        { id: 19, nameOfCountry: "Rwanda" },
        { id: 20, nameOfCountry: "Sierra Leone" },
        { id: 21, nameOfCountry: "Somalia" },
        { id: 22, nameOfCountry: "Sri Lanka" },
        { id: 23, nameOfCountry: "Syria" },
        { id: 24, nameOfCountry: "the Democratic Republic of Congo" },
        { id: 25, nameOfCountry: "the Sudan" },
        { id: 26, nameOfCountry: "Tunisia" },
        { id: 27, nameOfCountry: "Vietnam" },
      ]);
    });
};
