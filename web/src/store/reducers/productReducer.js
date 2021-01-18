import { 
  RETRIEVE_PRODUCTS_LOADING,
  RETRIEVE_PRODUCTS_SUCCESS,
  RETRIEVE_PRODUCTS_FAILURE,
  SAVE_PRODUCT_LOADING,
  SAVE_PRODUCT_SUCCESS,
  SAVE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_LOADING,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  DELETE_PRODUCT_LOADING,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
} from 'store/actions/productActions';
import { initialProductState, defaultLoadableData } from 'store/state/initialStates';
import { updateLoadable } from 'utils/loadable';

export const productReducer = (state = initialProductState(), action) => {
  switch (action.type) {
    case RETRIEVE_PRODUCTS_LOADING: 
      return {
        ...state,
        products: {
          ...updateLoadable(state.products, true, undefined),
          data: defaultLoadableData(),
        }
      }
    
    case RETRIEVE_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: {
          ...updateLoadable(state.products, false, undefined),
          data: action.data,
        }
      }
    
    case RETRIEVE_PRODUCTS_FAILURE: 
      return {
        ...state,
        products: {
          ...updateLoadable(state.products, false, action.error),
          data: defaultLoadableData(),
        }
      }
    
    case SAVE_PRODUCT_LOADING: 
      return {
        ...state,
        save: {
          ...updateLoadable(state.save, true, undefined),
          data: undefined,
        }
      }
    
    case SAVE_PRODUCT_SUCCESS:
      return {
        ...state,
        save: {
          ...updateLoadable(state.save, false, undefined),
          data: action.data,
        }
      }
    
    case SAVE_PRODUCT_FAILURE: 
      return {
        ...state,
        save: {
          ...updateLoadable(state.save, false, action.error),
          data: undefined,
        }
      }
    
    case UPDATE_PRODUCT_LOADING: 
      return {
        ...state,
        update: {
          ...updateLoadable(state.update, true, undefined),
          data: undefined,
        }
      }
    
    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        update: {
          ...updateLoadable(state.update, false, undefined),
          data: action.data,
        }
      }
    
    case UPDATE_PRODUCT_FAILURE: 
      return {
        ...state,
        update: {
          ...updateLoadable(state.update, false, action.error),
          data: undefined,
        }
      }
    
    case DELETE_PRODUCT_LOADING: 
      return {
        ...state,
        delete: {
          ...updateLoadable(state.delete, true, undefined),
          data: undefined,
        }
      }
    
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        delete: {
          ...updateLoadable(state.delete, false, undefined),
          data: action.data,
        }
      }
    
    case DELETE_PRODUCT_FAILURE: 
      return {
        ...state,
        delete: {
          ...updateLoadable(state.delete, false, action.error),
          data: undefined,
        }
      }
    
    default: 
      return {...state}
  }
}