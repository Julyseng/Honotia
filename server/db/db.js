function registerUser(userId, { firstName, lastName }, connection) {
  return connection('users')
    .where('id', userId)
    .update({ firstName, lastName })
}

function registerLanguage(userId, languageId, connection) {
  return connection('languages').insert('user_id', userId)
}

function registerRefugee(refugeeDetails, connection) {
  return connection('refugees').insert(refugeeDetails)
}

function registerNeed() {}

function registerSupport() {}

function saveProfileUrl(userId, profileImg, connection) {
  return connection('users')
    .where('id', userId)
    .update({ profileImg })
}

module.exports = {
  registerUser,
  registerLanguage,
  registerRefugee,
  saveProfileUrl
}
