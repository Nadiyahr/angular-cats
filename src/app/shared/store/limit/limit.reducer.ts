import { createReducer, on } from "@ngrx/store"
import { setLimit } from "./limit.action"

export const initialState: Readonly<string> = '10'

export const limitReducer = createReducer(
  initialState,
  on(setLimit, (state, {value}) => {
    return value
  })
)
