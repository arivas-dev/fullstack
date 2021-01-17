import axios from 'axios';
import endpoints from 'constants/api';

const RETRIEVE_PRODUCTS_LOADING = 'RETRIEVE_PRODUCTS_LOADING';
const RETRIEVE_PRODUCTS_SUCCESS = 'RETRIEVE_PRODUCTS_SUCCESS';
const RETRIEVE_PRODUCTS_FAILURE = 'RETRIEVE_PRODUCTS_FAILURE';

const SAVE_PRODUCT_LOADING = 'SAVE_PRODUCT_LOADING';
const SAVE_PRODUCT_SUCCESS = 'SAVE_PRODUCT_SUCCESS';
const SAVE_PRODUCT_FAILURE = 'SAVE_PRODUCT_FAILURE';

const UPDATE_PRODUCT_LOADING = 'UPDATE_PRODUCT_LOADING';
const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
const UPDATE_PRODUCT_FAILURE = 'UPDATE_PRODUCT_FAILURE';

const DELETE_PRODUCT_LOADING = 'DELETE_PRODUCT_LOADING';
const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
const DELETE_PRODUCT_FAILURE = 'DELETE_PRODUCT_FAILURE';

const retrieveProductsLoading = () => ({ type: RETRIEVE_PRODUCTS_LOADING });
const retrieveProductsSuccess = productPage => ({ type: RETRIEVE_PRODUCTS_SUCCESS, data: productPage });
const retrieveProductsFailure = error => ({ type: RETRIEVE_PRODUCTS_FAILURE, error });

const saveProductLoading = () => ({ type: SAVE_PRODUCT_LOADING });
const saveProductSuccess = product => ({ type: SAVE_PRODUCT_SUCCESS, data: product });
const saveProductFailure = error => ({ type: SAVE_PRODUCT_FAILURE, error });

const updateProductLoading = () => ({ type: UPDATE_PRODUCT_LOADING });
const updateProductSuccess = product => ({ type: UPDATE_PRODUCT_SUCCESS, data: product });
const updateProductFailure = error => ({ type: UPDATE_PRODUCT_FAILURE, error });

const deleteProductLoading = () => ({ type: DELETE_PRODUCT_LOADING });
const deleteProductSuccess = product => ({ type: DELETE_PRODUCT_SUCCESS, data: product });
const deleteProductFailure = error => ({ type: DELETE_PRODUCT_FAILURE, error });

export const retrieveProducts = ( skip, limit ) => {
  return async dispatch => {
    try {
      dispatch(retrieveProductsLoading());
      const response = await axios.get(endpoints.products.retrieve, { skip, limit });
      const list = response.data;
      dispatch(retrieveProductsSuccess(list));
    } catch (error) {
      dispatch(retrieveProductsFailure('common error'));
    }
  };
};

export const saveProduct = product => {
  return async dispatch => {
    try {
      dispatch(saveProductLoading());
      const response = await axios.post(endpoints.products.save, product);
      const newProduct = response.data;
      dispatch(saveProductSuccess(newProduct));
    } catch (error) {
      dispatch(saveProductFailure('common error'));
    }
  };
};

export const updateProduct = product => {
  return async dispatch => {
    try {
      dispatch(updateProductLoading());
      const response = await axios.get(endpoints.products.update(product.id), product);
      const updatedProduct = response.data;
      dispatch(updateProductSuccess(updatedProduct));
    } catch (error) {
      dispatch(updateProductFailure('common error'));
    }
  };
};

export const deleteProduct = product => {
  return async dispatch => {
    try {
      dispatch(deleteProductLoading());
      const response = await axios.get(endpoints.products.delete(product.id), product);
      const removedProduct = response.data;
      dispatch(deleteProductSuccess(removedProduct));
    } catch (error) {
      dispatch(deleteProductFailure('common error'));
    }
  };
};
