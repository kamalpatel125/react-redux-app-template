export type AnyFunction = (...args: any[]) => any
// tslint:disable-next-line:interface-over-type-literal
export type StringMap<T> = { [key: string]: T }

export type Action<T extends string = string, P = void> = P extends void
  ? Readonly<{ type: T }>
  : Readonly<{ type: T; payload: P }>

export type ActionsUnion<A extends StringMap<AnyFunction>> = ReturnType<A[keyof A]>

// conditional type for filtering actions in epics/effects
export type ActionsOfType<
  ActionUnion,
  ActionType extends string
> = ActionUnion extends Action<ActionType> ? ActionUnion : never
