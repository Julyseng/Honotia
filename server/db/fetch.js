function getUserProfiles(userId, connection) {
  return connection('users').whereNot('id', userId)
}

function getCurrentUserProfile(userId, connection) {
  return connection('users')
    .where('id', userId)
    .first()
}

module.exports = {
  getUserProfiles,
  getCurrentUserProfile
}
