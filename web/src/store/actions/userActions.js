import axios from 'axios';
import endpoints from 'constants/api';
import messages from 'constants/messages';

//LOGIN
const LOGIN_LOADING = 'LOGIN_LOADING';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOGOUT = 'LOGOUT';

//CRUD
const RETRIEVE_USERS_LOADING = 'RETRIEVE_USERS_LOADING';
const RETRIEVE_USERS_SUCCESS = 'RETRIEVE_USERS_SUCCESS';
const RETRIEVE_USERS_FAILURE = 'RETRIEVE_USERS_FAILURE';

const SAVE_USER_LOADING = 'SAVE_USER_LOADING';
const SAVE_USER_SUCCESS = 'SAVE_USER_SUCCESS';
const SAVE_USER_FAILURE = 'SAVE_USER_FAILURE';

const UPDATE_USER_LOADING = 'UPDATE_USER_LOADING';
const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

const DELETE_USER_LOADING = 'DELETE_USER_LOADING';
const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE';

//LOGIN
const loginLoading = () => ({ type: LOGIN_LOADING });
const loginFailure = error => ({ type: LOGIN_SUCCESS, error });
const loginSuccess = data => ({ type: LOGIN_FAILURE, data });
export const logout = () => ({ type: LOGOUT });

//CRUD
const retrieveUsersLoading = () => ({ type: RETRIEVE_USERS_LOADING });
const retrieveUsersSuccess = userPage => ({ type: RETRIEVE_USERS_SUCCESS, data: userPage });
const retrieveUsersFailure = error => ({ type: RETRIEVE_USERS_FAILURE, error });

const saveUserLoading = () => ({ type: SAVE_USER_LOADING });
const saveUserSuccess = user => ({ type: SAVE_USER_SUCCESS, data: user });
const saveUserFailure = error => ({ type: SAVE_USER_FAILURE, error });

const updateUserLoading = () => ({ type: UPDATE_USER_LOADING });
const updateUserSuccess = user => ({ type: UPDATE_USER_SUCCESS, data: user });
const updateUserFailure = error => ({ type: UPDATE_USER_FAILURE, error });

const deleteUserLoading = () => ({ type: DELETE_USER_LOADING });
const deleteUserSuccess = user => ({ type: DELETE_USER_SUCCESS, data: user });
const deleteUserFailure = error => ({ type: DELETE_USER_FAILURE, error });

export const login = user => {
  return async dispatch => {
    dispatch(loginLoading());
    try {
      const response = await axios.post(endpoints.login, user);
      const userData = response.data;
      dispatch(loginSuccess(userData));
      //save token in localstorage
    } catch (error) {
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

export const saveUser = product => {
  return async dispatch => {
    try {
      dispatch(saveUserLoading());
      const response = await axios.post(endpoints.products.save, product);
      const newUser = response.data;
      dispatch(saveUserSuccess(newUser));
    } catch (error) {
      dispatch(saveUserFailure('common error'));
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

export const deleteUser = user => {
  return async dispatch => {
    try {
      dispatch(deleteUserLoading());
      const response = await axios.get(endpoints.products.delete(user.id), user);
      const removedUser = response.data;
      dispatch(deleteUserSuccess(removedUser));
    } catch (error) {
      dispatch(deleteUserFailure('common error'));
    }
  };
};


