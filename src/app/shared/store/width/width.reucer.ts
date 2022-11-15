import { createReducer, on } from '@ngrx/store';
import { setWidth } from './width.action';

export const initialState: number = 0

export const widthReucer = createReducer(
  initialState,
  on(setWidth, (state, {width}) => {
    return width
  })
)
