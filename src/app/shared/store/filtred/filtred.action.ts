import { createAction, props } from "@ngrx/store";
import { Breed } from "../../types";

export const setFiltred = createAction(
  '[Filtred] Set Filtred',
  props<{filtred: Breed[]}>()
)
