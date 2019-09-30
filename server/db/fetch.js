function getUserProfiles(userId, connection) {
  return connection('users')
    .whereNot('id', userId)
}

module.exports = {
  getUserProfiles
}
