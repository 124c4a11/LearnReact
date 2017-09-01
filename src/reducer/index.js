import {combineReducers} from 'redux';
import counteReducer from './counter';
import articles from './articles';
import filters from './filters';
import comments from './comments';


export default combineReducers({
  count: counteReducer,
  articles,
  filters,
  comments
});