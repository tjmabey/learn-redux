// reducer accepts two things:
//
// 1. the action (info about what happened)
// 2. copy of current state

// take in state
// modify state
// return state

function posts(state=[], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      const index = action.index;
      return [
        ...state.slice(0, index),
        {...state[index], likes: state[index].likes + 1},
        ...state.slice(index + 1),
      ]
    default:
      return state;
  }
}

export default posts;
