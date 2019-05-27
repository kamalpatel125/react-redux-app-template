

export interface IState {
  entities: any
}

export interface IEpicAction {
  readonly type: string,
  payload?: any
}

export interface IBaseAction<T extends string> {
  readonly type: T
}

export interface IAction<T extends string, P = {}> extends IBaseAction<T> {
  payload?: P
}

export interface ISignalRAction<T extends string, P = {}> extends IAction<T> {
  signlaR?: boolean
  payload?: P
  listenerFn?: any
}

export interface IActionHandler<S, A> {
  [type: string]: (state?: S, actions?: A) => S
}

export interface IThunkAction {
  dispatch: (action: IAction<any>) => void,
  getState: () => IState
}

export type ThunkAction<R = void> = (
  dispatch: (action: IAction<any>) => void,
  getState: () => IState
) => R
