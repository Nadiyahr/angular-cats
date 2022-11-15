import { createReducer, on } from "@ngrx/store";
import { Breed } from "../../types";
import { setFiltred } from "./filtred.action";

export const initialState: ReadonlyArray<Breed> = []

export const filtredReucer = createReducer(
  initialState,
  on(setFiltred, (state, {filtred}) => {
    return filtred
  })
)
