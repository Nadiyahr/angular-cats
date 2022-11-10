import { ApiService } from './../shared/api.service';
import { CatImg } from '../shared/types';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getValue } from '../shared/store/value/value.selector';
import { selectLimit } from '../shared/store/limit/limit.selector';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  cardList: CatImg[] = []
  limit: string = '10'
  breedValue: string = ''
  value$ = this.store.pipe(select(getValue))
  limit$ = this.store.pipe(select(selectLimit))

  constructor(
    private store: Store,
    private api: ApiService
  ) { } 

  ngOnInit(): void {
    this.getCards(this.breedValue, this.limit)
    this.value$.subscribe(value => {
      this.breedValue = value
      this.getCards(value, this.limit)
    })
    this.limit$.subscribe(value => {
      this.limit = value
      this.getCards(this.breedValue, value)
    })
  }

  getCards(id: string, limit: string) {
    if (id) {
      this.api.getCardsByBreed(id, limit)
        .subscribe(data => {
          this.cardList = data
      })
    } else {
      this.api.getRandomCards(limit)
        .subscribe(data => {
          this.cardList = data
        })
    }
  }
}
