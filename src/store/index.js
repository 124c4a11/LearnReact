import {createStore, applyMiddleware} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import history from '../history';
import reducer from '../reducer';
import logger from '../middlewares/logger';
import randomId from '../middlewares/randomid';
import api from '../middlewares/api';
import thunk from 'redux-thunk';


const enhancer = applyMiddleware(thunk, routerMiddleware(history), api, randomId);

const store = createStore(reducer, {}, enhancer);

// dev only
window.store = store;

export default store;