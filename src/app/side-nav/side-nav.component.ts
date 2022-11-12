import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getBreed } from '../shared/store/app.selectors';
import { selectBreeds } from '../shared/store/breeds/breeds.selector';
import { Breed } from '../shared/types';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  shouldRun = true
  breedsList: Breed[] = []
  breeds$ = this.store.pipe(select(selectBreeds))
  breedId: string = ''
  breedDetails: Breed | undefined
  breedId$ = this.store.pipe(select(getBreed))

  constructor(private store: Store) { 
    this.breeds$.subscribe(breeds => {
      this.breedsList = breeds
    })
  }

  ngOnInit(): void {
    this.breedId$.subscribe(breedId => {
      this.breedId = breedId
      this.breedDetails = this.breedsList.find(breedItem => breedItem.id === breedId || undefined)
    })
  }
}
