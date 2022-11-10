import { SelectList } from '../../types';
import { createAction, props } from '@ngrx/store';

export const invokeBreedsAPI = createAction(
  '[Breed API] Invoke Breeeds Fetch API',
);

export const breedsFetchAPISuccess = createAction(
  '[Breed API] Fetch API Success',
  props<{allBreeds: SelectList[]}>()
)
