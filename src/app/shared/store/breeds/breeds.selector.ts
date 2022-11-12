import { SelectList, Breed } from '../../types';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectBreeds = createFeatureSelector<Breed[]>('breedslist')

export const getBreedById = (breedId: string) => createSelector(
  selectBreeds,
  (breeds) => breeds.find(breed => breed.id === breedId)
)
