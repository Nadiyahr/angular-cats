import { createReducer, on } from "@ngrx/store"
import { setValue } from "./value.action"

export const initialState: Readonly<string> = ''

export const valueReducer = createReducer(
  initialState,
  on(setValue, (state, {value}) => {
    return value
  })
  )
