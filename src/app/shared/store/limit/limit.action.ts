import { createAction, props } from '@ngrx/store';

export const setLimit = createAction(
  '[Limit] Set Limit',
  props<{value: string}>()
)
