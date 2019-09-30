import request from 'superagent'

export const SEND_USER_ACCOUNT = 'SEND_USER_ACCOUNT'

export const storeFormData = (userAccountData) => {
    console.log(storeFormData)
    return {
        type: SEND_USER_ACCOUNT,
        userAccountData
    }
}

