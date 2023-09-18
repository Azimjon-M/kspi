import { createStore } from 'redux';
import rootReducer from './moduls/index';

const store = createStore(rootReducer);
export default store;