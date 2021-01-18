import axios from 'axios';
import { 
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  RETRIEVE_USERS_LOADING,
  RETRIEVE_USERS_SUCCESS,
  RETRIEVE_USERS_FAILURE,
  REGISTER_USER_LOADING,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  UPDATE_USER_LOADING,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
} from 'store/actions/userActions';
import { initialUserState, defaultLoadableData } from 'store/state/initialStates';
import { persistReducer } from 'redux-persist';
import { updateLoadable } from 'utils/loadable';
import storage from 'redux-persist/lib/storage'

const authPersistConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['login'],
}

export const userReducer = (state = initialUserState(), action) => {
  if (state.login.data) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${state.login.data}`;
  }
  switch (action.type) {
    case LOGIN_LOADING: 
      return {
        ...state,
        login: {
          ...updateLoadable(state.login, true, undefined),
          data: undefined,
        }
      }
    
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          ...updateLoadable(state.login, false),
          data: action.data,
        }
      }
    
    case LOGIN_FAILURE:
      return {
        ...state,
        login: {
          ...updateLoadable(state.login, false, action.error),
          data: undefined,
        }
      }
    
    case LOGOUT:
      return {
        ...state,
        login: {
          ...updateLoadable(state.login, false, undefined),
          firstFetch: true,
          data: undefined,
        }
      }
    
    case RETRIEVE_USERS_LOADING: 
      return {
        ...state,
        users: {
          ...updateLoadable(state.users, true, undefined),
          data: defaultLoadableData(),
        }
      }
    
    case RETRIEVE_USERS_SUCCESS:
      return {
        ...state,
        users: {
          ...updateLoadable(state.users, false, undefined),
          data: action.data,
        }
      }
    
    case RETRIEVE_USERS_FAILURE: 
      return {
        ...state,
        users: {
          ...updateLoadable(state.users, false, action.error),
          data: defaultLoadableData(),
        }
      }

    case REGISTER_USER_LOADING: 
      return {
        ...state,
        register: {
          ...updateLoadable(state.register, true, undefined),
          data: undefined,
        }
      }
    
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        register: {
          ...updateLoadable(state.register, false, undefined),
          data: action.data,
        }
      }
    
    case REGISTER_USER_FAILURE: 
      return {
        ...state,
        register: {
          ...updateLoadable(state.register, false, action.error),
          data: undefined,
        }
      }

    case UPDATE_USER_LOADING: 
      return {
        ...state,
        update: {
          ...updateLoadable(state.update, true, undefined),
          data: undefined,
        }
      }
    
    case UPDATE_USER_SUCCESS:
      const userList = state.users.data.list;
      const newList = userList.map(user => {
        if (user.id !== action.data.id) return user;
        return {...user, ...action.data};
      });

      return {
        ...state,
        update: {
          ...updateLoadable(state.update, false, undefined),
          data: action.data,
        },
        users: {
          data: {
            ...state.users.data,
            list: newList,
          }
        }
      }
    
    case UPDATE_USER_FAILURE: 
      return {
        ...state,
        update: {
          ...updateLoadable(state.update, false, action.error),
          data: undefined,
        }
      }
    
    default:
      return {...state};
  };
};

export const persistedUserReducer = persistReducer(authPersistConfig, userReducer);
