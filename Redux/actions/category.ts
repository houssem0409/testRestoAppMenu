import { Dispatch } from 'react'
import { AnyAction } from 'redux'
import categoryService from '../../services/category.service'
import { ADD_CATEGORIES_FAIL, ADD_CATEGORIES_SUCCESS, DELETE_CATEGORIES_FAIL, DELETE_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAIL, FETCH_CATEGORIES_SUCCESS, UPDATE_CATEGORIES_FAIL, UPDATE_CATEGORIES_SUCCESS } from './types'
export const getAllCategories = () => (dispatch:Dispatch<AnyAction>) => {
    console.log('jefief');
    
  return categoryService.getCategories().then(
    (response:any) => {
      const categories = response
      dispatch({
        type: FETCH_CATEGORIES_SUCCESS,
        payload: categories,
      })
      
      return categories
    },
    (error:any) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      dispatch({
        type: FETCH_CATEGORIES_FAIL,
      })

      return Promise.reject()
    }
  )
}


export const AddCategories = (category : any) => (dispatch:Dispatch<AnyAction>) => {
  
  return categoryService.addCategories(category).then(
    (response : any) => {
      dispatch({
        type: ADD_CATEGORIES_SUCCESS,
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
        type: ADD_CATEGORIES_FAIL,
        payload : message
      });
   
      return Promise.reject();
    }
  );

};


export const UpdateCategories = (category : any , id : any) => (dispatch:Dispatch<AnyAction>) => {
  
  return categoryService.updateCategories(category , id).then(
    (response : any) => {
      dispatch({
        type: UPDATE_CATEGORIES_SUCCESS,
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
        type: UPDATE_CATEGORIES_FAIL,
        payload : message
      });
   
      return Promise.reject();
    }
  );
  
};


export const DeleteCategories = ( id : any) => (dispatch:Dispatch<AnyAction>) => {
  
  return categoryService.deleteCategories( id).then(
    (response : any) => {
      dispatch({
        type: DELETE_CATEGORIES_SUCCESS,
        payload : ''
      });
    },
    (error : any) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: DELETE_CATEGORIES_FAIL,
        payload : message
      });
   
      return Promise.reject();
    }
  );
  
};