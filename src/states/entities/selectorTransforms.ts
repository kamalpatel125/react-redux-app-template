import { createSelector } from 'reselect'
import { IState } from '../store'
import * as selectors from './selectors'

export const hasUserAuthorised: (state: IState) => boolean =
  createSelector(
    selectors.getSideBarState,
    (sidebarState) => sidebarState
  )
