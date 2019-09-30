import request from 'superagent'
import { getAuthorizationHeader } from 'authenticare/client'

export function registerUser(data) {
  return request
    .put('/api/v1/user/register-user-details')
    .set(getAuthorizationHeader())
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

function registerProfileImg(profileFile) {
  return request
    .post('/s3/upload')
    .set(getAuthorizationHeader())
    .attach('profileImg', profileFile)
    .catch(e => {
      console.log(e)
    })
}
