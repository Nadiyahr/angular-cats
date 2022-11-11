import { createFeatureSelector } from '@ngrx/store';
import { createSelector } from '@ngrx/store';
import { AppState } from './app.reducer';

export const getFullState = createFeatureSelector<AppState>('getstate')

export const getLimit = createSelector(
  getFullState,
  (state) => {
    return state.limit
  }
)

export const getBreed = createSelector(
  getFullState,
  (state) => {
    return state.breedId
  }
)
