export default function dummy(state = [], action) {
  switch (action.type) {
    case 'DUMMY_ACTION':
      return action.gossips

    default:
      return state
  }
}
