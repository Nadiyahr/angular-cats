import { Breed } from '../../types';
import { createReducer, on } from '@ngrx/store';
import { breedsFetchAPISuccess } from './breeds.actions';

export const initialState: ReadonlyArray<Breed> = []

export const breedReducer = createReducer(
  initialState,
  on(breedsFetchAPISuccess, (state, {allBreeds}) => {
    return allBreeds
  })
  )
