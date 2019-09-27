import request from 'superagent'
import { getAuthorizationHeader } from 'authenticare/client'

export function postUserInfo(data) {
  return request
    .post('/api/v1/journey/postUserInfo')
    .set(getAuthorizationHeader()) //sends token to server. from server i can use decodetoken to get the user id
    .send(data)
    .catch(e => {
      console.log(e)
    })
}
