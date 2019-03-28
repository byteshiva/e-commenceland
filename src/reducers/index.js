import { combineReducers } from 'redux';
import postReducer from './orderReducer';

export default combineReducers({
    orders: postReducer
})