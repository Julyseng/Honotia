import connectReducer from '../../client/reducers/connectReducer'

import { receiveProfiles } from '../../client/actions'

describe('connectReducer', () => {
    test('initial state is nothing', () => {
        let state = connectReducer(undefined, {type: '@@INIT'})
        expect(state).toEqual([])
    })

    test('receiveProfiles', () => {
        let state = connectReducer([], receiveProfiles())
        expect(state).toEqual([])
    })


})