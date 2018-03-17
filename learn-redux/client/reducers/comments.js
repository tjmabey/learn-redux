// reducer accepts two things:
//
// 1. the action (info about what happened)
// 2. copy of current state

// take in state
// modify state
// return state

function comments(state=[], action) {
  console.log(state, action);
  return state;
}

export default comments;
