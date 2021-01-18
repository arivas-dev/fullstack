import axios from 'axios';
import { endpoints } from 'constants/api';
import { errorHandler } from 'utils/responses';

export const RETRIEVE_PRODUCTS_LOADING = 'RETRIEVE_PRODUCTS_LOADING';
export const RETRIEVE_PRODUCTS_SUCCESS = 'RETRIEVE_PRODUCTS_SUCCESS';
export const RETRIEVE_PRODUCTS_FAILURE = 'RETRIEVE_PRODUCTS_FAILURE';

export const SAVE_PRODUCT_LOADING = 'SAVE_PRODUCT_LOADING';
export const SAVE_PRODUCT_SUCCESS = 'SAVE_PRODUCT_SUCCESS';
export const SAVE_PRODUCT_FAILURE = 'SAVE_PRODUCT_FAILURE';

export const UPDATE_PRODUCT_LOADING = 'UPDATE_PRODUCT_LOADING';
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
export const UPDATE_PRODUCT_FAILURE = 'UPDATE_PRODUCT_FAILURE';

export const DELETE_PRODUCT_LOADING = 'DELETE_PRODUCT_LOADING';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAILURE = 'DELETE_PRODUCT_FAILURE';

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
      const { data: { data: list = [], meta } } = response;
      const productList = list.map(product => ({...product.attributes, id: product.id }));
      dispatch(retrieveProductsSuccess({
        list: productList,
        meta,
      }));
    } catch (error) {
      const errorText = errorHandler(error.response);
      dispatch(retrieveProductsFailure(errorText));
    }
  };
};

export const saveProduct = (product,refreshPage) => {
  return async dispatch => {
    try {
      dispatch(saveProductLoading());
      const response = await axios.post(endpoints.products.save, product);
      const newProduct = response.data;
      dispatch(saveProductSuccess(newProduct));
      await dispatch(retrieveProducts(refreshPage));
    } catch (error) {
      const errorText = errorHandler(error.response);
      dispatch(saveProductFailure(errorText));
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
      const errorText = errorHandler(error.response);
      dispatch(updateProductFailure(errorText));
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
      const errorText = errorHandler(error.response);
      dispatch(deleteProductFailure(errorText));
    }
  };
};
