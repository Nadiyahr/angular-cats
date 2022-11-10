import { createFeatureSelector } from "@ngrx/store";

export const getValue = createFeatureSelector<string>('breedvalue')
