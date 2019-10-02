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
  if (languages.length < 1) return Promise.resolve([])

  let languagesToSave = languages.map(languageId => {
    return {
      user_id: userId,
      language_id: languageId
    }
  })
  return connection('user_languages').insert(languagesToSave)
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

function registerNeeds(userId, needsObj, connection) {
  let needs = Object.keys(needsObj)
  let needsToSave = needs.map(needId => {
    return {
      user_id: userId,
      needs_id: needId
    }
  })

  if (needsToSave.length < 1) return Promise.resolve([])

  return connection('user_needs').insert(needsToSave)
}

function registerSupports(userId, supportsObj, connection) {
  let supports = Object.keys(supportsObj)
  let supportsToSave = supports.map(supportId => {
    return {
      user_id: userId,
      supports_id: supportId
    }
  })

  if (supportsToSave.length < 1) return Promise.resolve([])

  return connection('user_support').insert(supportsToSave)
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
