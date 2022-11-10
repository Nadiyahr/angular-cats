// import { createReducer, on, createSelector } from '@ngrx/store';
// import { AppState } from '../../types';
// import { cardFetchAPISuccess } from './value.action';

// export const initialState: Readonly<AppState> = {
//   apiStatus: '',
//   breedId: '',
//   itemsPerPage:10,
//   cards: []
// }

// export const cardReducer = createReducer(
//   initialState,
//   on(cardFetchAPISuccess, (state, {allCards}) => {
//     return allCards
//   })
//   )

//------------------

// import { createFeatureSelector } from '@ngrx/store';

// export const breedValueSelector = createFeatureSelector<string>('breedvalue')

//---------------------------

// import { CatImg } from '../../types';
// // import { SelectList } from '../../types';
// import { createAction, props } from '@ngrx/store';

// export const setBreedValue = createAction(
//   '[Breed] Invoke Breeed',
// );

// export const cardFetchAPISuccess = createAction(
//   '[Cards API] Fetch API Success',
//   props<{allBreeds: CatImg[]}>()
// )
