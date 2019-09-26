module.exports = {
    postUserInfoDb
}

function postUserInfoDb(data, connection) {
    return connection('tableName')
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