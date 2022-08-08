import { ADD_CATEGORIES_FAIL, ADD_CATEGORIES_SUCCESS, DELETE_CATEGORIES_FAIL, DELETE_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAIL, FETCH_CATEGORIES_SUCCESS, UPDATE_CATEGORIES_FAIL, UPDATE_CATEGORIES_SUCCESS } from '../actions/types'

const initialState = [{
  name : '',

}]
export default function categoriesReducer(state = initialState, action:any) {
  const { type, payload } = action
  switch (type) {
    case FETCH_CATEGORIES_SUCCESS:
      return action.payload
    case FETCH_CATEGORIES_FAIL:
      return { ...state, payload }
      case ADD_CATEGORIES_SUCCESS:
        return [ ...state, action.payload ];
      case ADD_CATEGORIES_FAIL:
        return [ ...state, action.payload ];
        case UPDATE_CATEGORIES_SUCCESS:
          return [ ...state, action.payload ];
        case UPDATE_CATEGORIES_FAIL:
          return [ ...state, action.payload ];
          case DELETE_CATEGORIES_SUCCESS:
            return [ ...state, action.payload ];
          case DELETE_CATEGORIES_FAIL:
            return [ ...state, action.payload ];
    default:
      return state
  }
  
}
