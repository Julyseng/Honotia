import request from 'superagent'
import { getAuthorizationHeader } from 'authenticare/client'

export function registerUser(data) {
  console.log(data)
  return (
    request
      .post('/api/v1/user/register')
      .set(getAuthorizationHeader()) //sends token to server. from server i can use decodetoken to get the user id
      .send(data)
      // .then(() => {
      //   registerProfileImg(data.profileUrl)
      // })
      .catch(e => {
        console.log(e)
      })
  )
}

function registerProfileImg(profileUrl) {
  return request
    .post('/s3/upload')
    .attach('profileImg', profileUrl)
    .catch(e => {
      console.log(e)
    })
}
