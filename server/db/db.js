function registerUser(userId, userData, connection) {
  const {
    firstName,
    lastName,
    DOB,
    currentCity,
    occupation,
    email,
    bio,
    status
  } = userData

  return connection('users')
    .where('id', userId)
    .update({
      firstName,
      lastName,
      DOB,
      currentCity,
      occupation,
      email,
      bio,
      status
    })
}

function saveProfileUrl(userId, profileImg, connection) {
  return connection('users')
    .where('id', userId)
    .update({ profileImg })
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
  registerRefugee,
  saveProfileUrl
}
