import { combineReducers } from 'redux'
import items from './product'
import categories from './category'


export default combineReducers({
  items,
  categories
})
