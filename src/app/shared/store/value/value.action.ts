import { createAction, props } from '@ngrx/store';

export const setValue = createAction(
  '[Value] Set Value',
  props<{value: string}>()
)
