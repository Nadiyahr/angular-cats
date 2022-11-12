import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
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

  constructor(private store: Store) { 
    this.breeds$.subscribe(breeds => {
      this.breedsList = breeds
    })
  }

  ngOnInit(): void {
    // this.breeds$.subscribe(breeds => {
    //   this.breedsList = breeds
    // })

    console.log('SideNavComponent', this.breedsList)
  }

}
