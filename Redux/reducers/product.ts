import { ADD_ITEMS_FAIL, ADD_ITEMS_SUCCESS, DELETE_ITEMS_FAIL, DELETE_ITEMS_SUCCESS, FETCH_ITEMS_FAIL, FETCH_ITEMS_SUCCESS, UPDATE_ITEMS_FAIL, UPDATE_ITEMS_SUCCESS } from '../actions/types'

const initialState = [{
  title : '',
  description : '',
  price : ''
}]
export default function productsReducer(state = initialState, action:any) {
  const { type, payload } = action
  switch (type) {
    case FETCH_ITEMS_SUCCESS:
      return action.payload
    case FETCH_ITEMS_FAIL:
      return { ...state, payload }
   /* case FETCH_ONE_PRODUCT_SUCCESS:
      return { ...state, payload }
    case FETCH_ONE_PRODUCT_FAIL:
      return { ...state, payload }*/
      case ADD_ITEMS_SUCCESS:
        return [ ...state, action.payload ];
      case ADD_ITEMS_FAIL:
        return [ ...state, action.payload ];
        case UPDATE_ITEMS_SUCCESS:
          return [ ...state, action.payload ];
        case UPDATE_ITEMS_FAIL:
          return [ ...state, action.payload ];
          case DELETE_ITEMS_SUCCESS:
            return [ ...state, action.payload ];
          case DELETE_ITEMS_FAIL:
            return [ ...state, action.payload ];
    default:
      return state
  }
  
}
