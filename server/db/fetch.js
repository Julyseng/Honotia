function getUserProfiles(userId, connection) {
  return connection('users').whereNot('id', userId)
}

function getCurrentUserProfile(userId, connection) {
  return connection('users')
    .where('id', userId)
    .first()
}

function getLanguagesList(connection) {
  return connection('languages')
}

function getSupportsList(connection) {
  return connection('supports')
}

function getNeedsList(connection) {
  return connection('needs')
}

module.exports = {
  getUserProfiles,
  getCurrentUserProfile,
  getLanguagesList,
  getSupportsList,
  getNeedsList
}
