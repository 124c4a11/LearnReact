import {combineReducers} from 'redux';
import counteReducer from './counter';


export default combineReducers({
  count: counteReducer
});