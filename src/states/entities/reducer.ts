import { Reducer } from 'redux'
import { IState, initialState } from './state'
import * as t from './actionTypes'
import { IActionHandler } from '../store'


const toggleSidebar = (state: IState) => {
  return {
    ...state,
    sideBarClose: !state.sideBarClose
  }
}


const handlers: IActionHandler<IState, t.TActions> = {
  [t.TypeNames.TOGGLE_SIDE_BAR]  : toggleSidebar
}

const reducer: Reducer<IState> = (state = initialState, action: t.TActions) => {
  return handlers.hasOwnProperty(action.type)
    ? handlers[action.type](state, action)
    : state
}

export default reducer
