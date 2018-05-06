// reducer accepts two things:
//
// 1. the action (info about what happened)
// 2. copy of current state

// take in state
// modify state
// return state

function postComments(state=[], action) {
  return state;
}

function comments(state=[], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      ...state,
      ///vid 16
    }
  }
  return state;
}

export default comments;
