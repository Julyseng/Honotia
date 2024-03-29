exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('languages')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('languages')
        .insert([
          { id: 1, language: 'Afar' },
          { id: 2, language: 'Amharic' },
          { id: 3, language: 'Arabic' },
          { id: 4, language: 'Armenian' },
          { id: 5, language: 'Assyrian' },
          { id: 6, language: 'Bahasa Malayu' },
          { id: 7, language: 'Bangala' },
          { id: 8, language: 'Bhojpuri' },
          { id: 9, language: 'Burmese' },
          { id: 10, language: 'Cantonese' },
          { id: 11, language: 'Dari Persian' },
          { id: 12, language: 'Dutch' },
          { id: 13, language: 'English' },
          { id: 14, language: 'French' },
          { id: 15, language: 'Fujian' },
          { id: 16, language: 'German' },
          { id: 17, language: 'Guaragigna' },
          { id: 18, language: 'Hebrew' },
          { id: 19, language: 'Hindi' },
          { id: 20, language: 'Hokkien' },
          { id: 21, language: 'Internaional sign language' },
          { id: 22, language: 'Italian' },
          { id: 23, language: 'Japanese' },
          { id: 24, language: 'Kachin' },
          { id: 25, language: 'Karen' },
          { id: 26, language: 'Kayang' },
          { id: 27, language: 'Khmer' },
          { id: 28, language: 'Kikongo' },
          { id: 29, language: 'Kingwana' },
          { id: 30, language: 'Kinyarwanda' },
          { id: 31, language: 'Kirundi' },
          { id: 32, language: 'Kiswahili' },
          { id: 33, language: 'Korean' },
          { id: 34, language: 'Krio' },
          { id: 35, language: 'Kurdish' },
          { id: 36, language: 'Lao' },
          { id: 37, language: 'Lingala' },
          { id: 38, language: 'Lisu' },
          { id: 39, language: 'Maithali' },
          { id: 40, language: 'Malaysian' },
          { id: 41, language: 'Mandarin' },
          { id: 42, language: 'Mende' },
          { id: 43, language: 'Mon' },
          { id: 44, language: 'Monokutuba' },
          { id: 45, language: 'Ndebele' },
          { id: 46, language: 'Nepali' },
          { id: 47, language: 'New Zealand sign language' },
          { id: 48, language: 'Orominga' },
          { id: 49, language: 'Pashtu' },
          { id: 50, language: 'Persian' },
          { id: 51, language: 'Portugese' },
          { id: 52, language: 'Rakhaing' },
          { id: 53, language: 'Russian' },
          { id: 54, language: 'Shan' },
          { id: 55, language: 'Shona' },
          { id: 56, language: 'Sinhala' },
          { id: 57, language: 'Somali' },
          { id: 58, language: 'Samoan' },
          { id: 59, language: 'Spanish' },
          { id: 60, language: 'Sudan' },
          { id: 61, language: 'Swahili' },
          { id: 62, language: 'Tamang' },
          { id: 63, language: 'Tamil' },
          { id: 64, language: 'Te Reo Maori' },
          { id: 65, language: 'Temne' },
          { id: 66, language: 'Teochew' },
          { id: 67, language: 'Thai' },
          { id: 68, language: 'Tharu' },
          { id: 69, language: 'Tigrigna' },
          { id: 70, language: 'Tongan' },
          { id: 71, language: 'Turkic' }
        ])
        .then(() => {
          return knex
            .raw("SELECT setval('languages_id_seq', 72, true)")
            .then(() => {})
        })
    })
}
