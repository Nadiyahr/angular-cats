import { Action, createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions'

export interface AppState {
    limit: string;
    breedId: string;
  }

export const initialAppState: AppState = {
  limit: '12',
  breedId: ''
}

const appReducer = createReducer(
  initialAppState,
  on(AppActions.setBreed, (state, {breedId}) => ({...state, breedId})),
  on(AppActions.setLimit, (state, {limit}) => ({...state, limit}))
)

export function reducer(state: AppState | undefined, action: Action) {
  return appReducer(state, action)
}
