import { IState } from '../store'
import { STATE_KEY } from './constants'


export const getSideBarState: (state: IState) => boolean =
  (state) => state[STATE_KEY].sideBarClose

