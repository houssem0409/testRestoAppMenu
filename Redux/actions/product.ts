import { Dispatch } from 'react'
import { AnyAction } from 'redux'
import itemService from '../../services/item.service'
import { ADD_ITEMS_FAIL, ADD_ITEMS_SUCCESS, DELETE_ITEMS_FAIL, DELETE_ITEMS_SUCCESS, FETCH_ITEMS_FAIL, FETCH_ITEMS_SUCCESS, UPDATE_ITEMS_FAIL, UPDATE_ITEMS_SUCCESS } from './types'
export const getItems = () => (dispatch:Dispatch<AnyAction>) => {
  return itemService.getItems().then(
    (response:any) => {
      const items = response
      dispatch({
        type: FETCH_ITEMS_SUCCESS,
        payload: items,
      })

      return items
    },
    (error:any) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      dispatch({
        type: FETCH_ITEMS_FAIL,
      })

      return Promise.reject()
    }
  )
}
/*
export const getOneProduct = (id) => (dispatch) => {
  return productService.getOneProduct(id).then(
    (response) => {
      const product = response.data

      dispatch({
        type: FETCH_ONE_PRODUCT_SUCCESS,
        payload: product,
      })

      return product
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      dispatch({
        type: FETCH_ONE_PRODUCT_FAIL,
      })
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      })
      return Promise.reject()
    }
  )
}
*/

export const AddItems = (item : any) => (dispatch:Dispatch<AnyAction>) => {
  
  return itemService.addItems(item).then(
    (response : any) => {
      dispatch({
        type: ADD_ITEMS_SUCCESS,
        payload: response,
      });
       return Promise.resolve();
    },
    (error : any) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: ADD_ITEMS_FAIL,
        payload : message
      });
   
      return Promise.reject();
    }
  );

};


export const UpdateItems = (item : any , id : any) => (dispatch:Dispatch<AnyAction>) => {
  
  return itemService.updateItems(item , id).then(
    (response : any) => {
      dispatch({
        type: UPDATE_ITEMS_SUCCESS,
        payload: response,
      });
       return Promise.resolve();
    },
    (error : any) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: UPDATE_ITEMS_FAIL,
        payload : message
      });
   
      return Promise.reject();
    }
  );
  
};


export const DeleteItems = ( id : any) => (dispatch:Dispatch<AnyAction>) => {
  
  return itemService.deleteItems( id).then(
    (response : any) => {
      dispatch({
        type: DELETE_ITEMS_SUCCESS,
        payload: response,
      });
       return Promise.resolve();
    },
    (error : any) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: DELETE_ITEMS_FAIL,
        payload : message
      });
   
      return Promise.reject();
    }
  );
  
};