import { getFullState } from './../shared/store/app.selectors';
import { AppState } from './../shared/store/app.reducer';
import { ApiService } from './../shared/api.service';
import { CatImg } from '../shared/types';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})

export class CardListComponent implements OnInit {
  cardList: CatImg[] = []
  limit: string = '10'
  breedValue: string = ''
  bradAndLimit$ = this.store.pipe(select(getFullState))

  constructor(
    private store: Store,
    private api: ApiService
  ) {} 

  ngOnInit(): void {
    this.bradAndLimit$.subscribe(obj => {
      this.breedValue = obj.breedId
      this.limit = obj.limit
      this.getCards(obj)
    })
  }

  getCards(obj: AppState) {
    if (obj.breedId && obj.breedId.length > 0) {
      this.api.getCardsByBreed(obj.breedId, obj.limit)
        .subscribe(data => {
          this.cardList = data
        })
    } else {
      this.api.getRandomCards(obj.limit)
        .subscribe(data => {
          this.cardList = data
        })
    }
  }
}
