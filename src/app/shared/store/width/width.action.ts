import { createAction, props } from '@ngrx/store';


export const setWidth = createAction(
  '[Width Value] Set Width',
  props<{width: number}>()
)
