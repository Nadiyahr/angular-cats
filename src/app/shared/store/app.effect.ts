import { mergeMap, EMPTY, withLatestFrom } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ApiService } from './../api.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

@Injectable()
export class AppEffect {
  constructor(
    private actions$: Actions,
    private service: ApiService,
    private store: Store
  ) {}

}
