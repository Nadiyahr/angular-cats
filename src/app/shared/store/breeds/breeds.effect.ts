import { select, Store } from '@ngrx/store';
import { ApiService } from '../../api.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { breedsFetchAPISuccess, invokeBreedsAPI } from './breeds.actions';
import { EMPTY, mergeMap, map, withLatestFrom } from 'rxjs';
import { selectBreeds } from './breeds.selector';

@Injectable()
export class BreedEffect {
  constructor(
    private actions$: Actions,
    private breedSevice: ApiService,
    private store: Store
  ) { }

  loadAllBreeds$ = createEffect(() => 
    this.actions$.pipe(
      ofType(invokeBreedsAPI),
      withLatestFrom(this.store.pipe(select(selectBreeds))),
      mergeMap(([, breedformStore]) => {
        if (breedformStore.length > 0) {
          return EMPTY
        }
        return this.breedSevice.get().pipe(map((data) => breedsFetchAPISuccess({allBreeds: data})))
      })
      
      )
  )
}
