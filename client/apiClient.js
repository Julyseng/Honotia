import request from 'superagent'
import { getAuthorizationHeader } from 'authenticare/client'

export function registerUser(data) {
  console.log(data)
  let call = request
    .post('/s3/upload')
    .set(getAuthorizationHeader()) //sends token to server. from server i can use decodetoken to get the user id
    .attach('profileImg', data.actualFile)

  for (let key in data.userDetails) {
    call.field(`userDetails[${key}]`, data.userDetails[key])
  }
  // call.field('thing', {hi: 'hi'}) not this way
  call.catch(e => {
    console.log(e)
  })

  return call
}
