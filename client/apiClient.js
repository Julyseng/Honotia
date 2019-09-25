import request from 'superagent'

export function postUserInfo(data) {
    console.log(data)
    return request.post('/api/v1/journey/postUserInfo')
        .send(data)
        .catch(e => { console.log(e) })
}