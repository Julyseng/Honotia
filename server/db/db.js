function registerUser(userId, userDetails, connection) {
  return connection('users')
    .where('id', userId)
    .insert({
      userDetails
    })
}

function registerLanguage(userId, languageId, connection) {
  return connection('languages').insert('user_id', userId)
}

function registerRefugee(refugeeDetails, connection) {
  return connection('refugees').insert(refugeeDetails)
}

function registerNeed() {}

function registerSupport() {}

module.exports = {
  registerUser,
  registerLanguage,
  registerRefugee
}
