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

function registerProfileUrl(userId, profileImg, connection) {
  return connection('users')
    .where('id', userId)
    .update({ profileImg })
}

function registerLanguage(userId, languages, connection) {
  languages.map(languageId => {
    return connection('user_languages').insert({
      user_id: userId,
      language_id: languageId
    })
  })
}

function registerRefugee(userId, refugeeData, connection) {
  const { country, yearLeft, reasonForLeaving, yearOfArrival } = refugeeData

  return connection('refugees').insert({
    user_id: userId,
    country,
    yearLeft,
    reasonForLeaving,
    yearOfArrival
  })
}

function registerNeeds(userId, needs, connection) {
  // if needs is obj - convert to array
  let needsToSave = needs.map(needId => {
    return {
      user_id: userId,
      needs_id: needId
    }})
  return connection('user_needs').insert(needsToSave)
}

function registerSupports(userId, supports, connection) {
  supports.map(supportId => {
    return connection('user_needs').insert({
      user_id: userId,
      supports_id: supportId
    })
  })
}

module.exports = {
  registerUser,
  registerLanguage,
  registerRefugee,
  registerProfileUrl,
  registerRefugee,
  registerNeeds,
  registerSupports
}
