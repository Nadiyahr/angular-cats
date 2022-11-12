import { createAction, props } from '@ngrx/store';

export const setBreed = createAction(
  '[Breed Component] Set Breed',
  props<{breedId: string}>()
)

export const setLimit = createAction(
  '[Limit Component] Set Limit',
  props<{limit: string}>()
)
