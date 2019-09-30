import request from 'superagent'
import { getAuthorizationHeader } from 'authenticare/client'

export function registerUser(data) {
  console.log(data)
  return request
    .put('/api/v1/user/register-user-details')
    .set(getAuthorizationHeader()) //sends token to server. from server i can use decodetoken to get the user id
    .send(data)
    .then(() => {
      console.log(data)
      return registerProfileImg(data.actualFile)
    })
    .then(res => console.log(res.body))
    .catch(e => {
      console.log(e)
    })
}

function registerProfileImg(profileUrl) {
  console.log(profileUrl)
  return request
    .post('/s3/upload')
    .set(getAuthorizationHeader())
    .attach('profileImg', profileUrl)
    .catch(e => {
      console.log(e)
    })
}
