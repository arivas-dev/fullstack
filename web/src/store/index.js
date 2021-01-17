import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';

import rootReducer from './reducers';

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export const persistor = persistStore(store);
