import greeting_2Reducer from './greeting_2Reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  greetings: greeting_2Reducer
});

export default rootReducer;