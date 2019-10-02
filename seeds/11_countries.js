exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('countries')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('countries').insert([
        { name: 'Afghanistan' },
        { name: 'Algeria' },
        { name: 'Bosnia' },
        { name: 'Burma/Myanmar' },
        { name: 'Burundi' },
        { name: 'Cambodia' },
        { name: 'China' },
        { name: 'Columbia' },
        { name: 'Djibouti' },
        { name: 'Eritrea' },
        { name: 'Ethiopia' },
        { name: 'former Yugoslavia' },
        { name: 'Iran' },
        { name: 'Iraq' },
        { name: 'Kuwait' },
        { name: 'Laos' },
        { name: 'Nepal' },
        { name: 'Palestine' },
        { name: 'Republic of Congo' },
        { name: 'Rwanda' },
        { name: 'Sierra Leone' },
        { name: 'Somalia' },
        { name: 'Sri Lanka' },
        { name: 'Syria' },
        { name: 'the Democratic Republic of Congo' },
        { name: 'the Sudan' },
        { name: 'Tunisia' },
        { name: 'Vietnam' }
      ])
    })
}
