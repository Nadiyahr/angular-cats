import { createFeatureSelector } from "@ngrx/store";

export const selectLimit = createFeatureSelector<string>('limitnumber')
