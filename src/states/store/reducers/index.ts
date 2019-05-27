import { combineReducers } from 'redux'
import entities from '../../entities'


const reducers = {
  [entities.STATE_KEY] : entities.reducer
}

export default combineReducers(reducers)
