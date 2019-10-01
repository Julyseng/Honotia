import { RECEIVE_STORIES } from '../actions'

export default function storiesReducer(oldState = [], action) {
    switch (action.type) {
        case RECEIVE_STORIES:
            return action.stories
        
        default:
            return oldState
    }
}