import { Store } from '@ngrx/store';
import { ApiService } from '../../api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from "@angular/core";

@Injectable()
export class CardsEffect {
  constructor(
    private actions$: Actions,
    private cardsService: ApiService,
    private store: Store
  ) { }

  // loadAllCards$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType()
  //   )
  // )
}
