import { combineReducers } from 'redux';
import clockReducer from './clock_reducer';

// reducers get imported over to all together in combineReducers
// This creates the entire state storage for the entire application.
export default combineReducers({
    clock: clockReducer,
})