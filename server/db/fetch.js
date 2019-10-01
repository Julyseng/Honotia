function getUserProfiles(userId, connection) {
  return connection('users').whereNot('id', userId)
}

function getCurrentUserProfile(userId, connection) {
  return connection('users')
    .where('id', userId)
    .first()
}

function getStories(connection) {
  return connection('stories').select()
}

module.exports = {
  getUserProfiles,
  getCurrentUserProfile,
  getStories
}
