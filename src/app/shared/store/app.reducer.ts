import { Action, createReducer, on } from '@ngrx/store';
import * as AppActions from './app.action'

export interface AppState {
    limit: string;
    breedId: string;
  }

export const initialAppState: AppState = {
  limit: '10',
  breedId: ''
}

const appReducer = createReducer(
  initialAppState,
  on(AppActions.setBreed, (state, {breedId}) => {
    console.log('setBreed', state, {breedId: breedId, limit: state.limit})
    return {...state, breedId}
  }),
  on(AppActions.setLimit, (state, {limit}) => {
    console.log('setLimit',state, {breedId: state.breedId, limit: limit})
    return {...state, limit}
  })
)

export function reducer(state: AppState | undefined, action: Action) {
  return appReducer(state, action)
}
