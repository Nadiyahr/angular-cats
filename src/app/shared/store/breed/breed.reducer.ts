import { SelectList } from '../../types';
import { createReducer, on, createSelector } from '@ngrx/store';
import { breedsFetchAPISuccess } from './breed.actions';

export const initialState: ReadonlyArray<SelectList> = []

export const breedReducer = createReducer(
  initialState,
  on(breedsFetchAPISuccess, (state, {allBreeds}) => {
    return allBreeds
  })
  )
