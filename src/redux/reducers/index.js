import { combineReducers } from 'redux';

import greeting_2Reducer from './greeting_2Reducer';

const rootReducer = combineReducers({
  greetings: greeting_2Reducer
});

export default rootReducer;
