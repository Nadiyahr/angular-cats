import { SelectList } from '../../types';
import { createFeatureSelector } from "@ngrx/store";

export const selectBreeds = createFeatureSelector<SelectList[]>('breedslist')
