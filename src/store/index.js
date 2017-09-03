import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer';


const store = createStore(reducer);

// dev only
window.store = store;

export default store;