import {combineReducers} from 'redux';
import counteReducer from './counter';
import articles from './articles';


export default combineReducers({
  count: counteReducer,
  articles
});