import axios from 'axios';
import { endpoints } from 'constants/api';

//LOGIN
export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

//CRUD
export const RETRIEVE_USERS_LOADING = 'RETRIEVE_USERS_LOADING';
export const RETRIEVE_USERS_SUCCESS = 'RETRIEVE_USERS_SUCCESS';
export const RETRIEVE_USERS_FAILURE = 'RETRIEVE_USERS_FAILURE';

export const REGISTER_USER_LOADING = 'REGISTER_USER_LOADING';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

export const UPDATE_USER_LOADING = 'UPDATE_USER_LOADING';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

//LOGIN
const loginLoading = () => ({ type: LOGIN_LOADING });
const loginFailure = error => ({ type: LOGIN_FAILURE, error });
const loginSuccess = data => ({ type: LOGIN_SUCCESS, data });
export const logout = () => ({ type: LOGOUT });

//CRUD
const retrieveUsersLoading = () => ({ type: RETRIEVE_USERS_LOADING });
const retrieveUsersSuccess = userPage => ({ type: RETRIEVE_USERS_SUCCESS, data: userPage });
const retrieveUsersFailure = error => ({ type: RETRIEVE_USERS_FAILURE, error });

const registerUserLoading = () => ({ type: REGISTER_USER_LOADING });
const registerUserSuccess = user => ({ type: REGISTER_USER_SUCCESS, data: user });
const registerUserFailure = error => ({ type: REGISTER_USER_FAILURE, error });

const updateUserLoading = () => ({ type: UPDATE_USER_LOADING });
const updateUserSuccess = user => ({ type: UPDATE_USER_SUCCESS, data: user });
const updateUserFailure = error => ({ type: UPDATE_USER_FAILURE, error });

export const login = user => {
  return async dispatch => {
    dispatch(loginLoading());
    try {
      const response = await axios.post(endpoints.auth.login, user);
      const userToken = response.data.token;
      dispatch(loginSuccess(userToken));
    } catch (error) {
      console.log('ERROR', error);
      dispatch(loginFailure('common error'));
    }
  };
}

//CRUD
export const retrieveUsers = ( skip, limit ) => {
  return async dispatch => {
    try {
      dispatch(retrieveUsersLoading());
      const response = await axios.get(endpoints.users.retrieve, { skip, limit });
      const list = response.data;
      dispatch(retrieveUsersSuccess(list));
    } catch (error) {
      dispatch(retrieveUsersFailure('common error'));
    }
  };
};

export const registerUser = product => {
  return async dispatch => {
    try {
      dispatch(registerUserLoading());
      const response = await axios.post(endpoints.products.save, product);
      const newUser = response.data;
      dispatch(registerUserSuccess(newUser));
    } catch (error) {
      dispatch(registerUserFailure('common error'));
    }
  };
};

export const updateUser = user => {
  return async dispatch => {
    try {
      dispatch(updateUserLoading());
      const response = await axios.get(endpoints.products.update(user.id), user);
      const updatedUser = response.data;
      dispatch(updateUserSuccess(updatedUser));
    } catch (error) {
      dispatch(updateUserFailure('common error'));
    }
  };
};
