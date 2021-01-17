import { combineReducers } from 'redux';
import { productReducer } from './productReducer';
import { persistedUserReducer } from './userReducer'

const rootReducer = combineReducers({
    user: persistedUserReducer,
    product: productReducer,
});

export default rootReducer;