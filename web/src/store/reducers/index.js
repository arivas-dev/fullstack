import { combineReducers } from 'redux';
import { productReducer } from './productReducer';
import { userReducer } from './userReducer'

const rootReducer = combineReducers({
    userReducer,
    productReducer,
});

export default rootReducer;