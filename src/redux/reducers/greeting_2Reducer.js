import { SET_GREETING_2 } from '../actions/greeting_2Action';

const greeting_2Reducer = (state = {}, action) => {
  switch (action.type) {
    case SET_GREETING_2:
      return action.payload
    default:
      break;
  }
  return state;
}

export default greeting_2Reducer;
