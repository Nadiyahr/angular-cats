import { createFeatureSelector } from "@ngrx/store";
import { Breed } from "../../types";

export const selectFiltred = createFeatureSelector<Breed[]>('filtredlist')
