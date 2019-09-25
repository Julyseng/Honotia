const env = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[env]
const connection = require('knex')(config)

module.exports = {
    postUserInfoDb
}

function postUserInfoDb(data, db=connection) {
    return db('tableName')
        .insert({
            name: data.name,
            age: data.age,
            languages: data.languages,
            location: data.location,
            occupation: data.occupation,
            interests: data.interests,
            support: data.support,
            email: data.email
        })
}