import  { createStore, combineReducers} from 'redux';
import  blogReducer from './blogReducer'


// Blog reducer
const store = createStore(combineReducers({ blog: blogReducer}));

export default  store;