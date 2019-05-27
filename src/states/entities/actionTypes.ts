import { IAction } from '../store'

export enum TypeNames {
  INITIAL_STATE = 'entities/INITIAL_STATE',
  TOGGLE_SIDE_BAR = 'entities/TOGGLE_SIDE_BAR',
}

export type IInitialialState = IAction<TypeNames.INITIAL_STATE>
export type IToggleSideBar = IAction<TypeNames.TOGGLE_SIDE_BAR>

export type TActions =
  IInitialialState
| IToggleSideBar
