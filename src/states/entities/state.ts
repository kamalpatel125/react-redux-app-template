import { STATE_KEY } from './constants'

export const REF_DATA_INITIAL = 'REF_DATA_INITIAL'
export const REF_DATA_REQUESTED = 'REF_DATA_REQUESTED'
export const REF_DATA_SUCCESS = 'REF_DATA_SUCCESS'
export const REF_DATA_FAILED = 'REF_DATA_FAILED'

export interface IState {
  sideBarClose: boolean
}

export const initialState: any = {
  sideBarClose: false,
}

export type State = IState