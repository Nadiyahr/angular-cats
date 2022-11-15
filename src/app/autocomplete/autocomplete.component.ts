import { Breed } from './../shared/types';
import { selectFiltred } from './../shared/store/filtred/filtred.selector';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { map, Observable, startWith } from 'rxjs';
import { setBreed } from '../shared/store/app.actions';
import { invokeBreedsAPI } from '../shared/store/breeds/breeds.actions';
import { selectBreeds } from '../shared/store/breeds/breeds.selector';
import { setFiltred } from '../shared/store/filtred/filtred.action';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
  breedsControl = new FormControl<string | Breed>('')
  breedsList: Breed[] = []
  breeds$ = this.store.pipe(select(selectBreeds))
  filtredBreeds$ = this.store.pipe(select(selectFiltred))
  filteredOptions!: Observable<Breed[]>;// = this.breedsList.map(item => item.name);

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(invokeBreedsAPI())
    this.breeds$.subscribe(breeds => {
      this.store.dispatch(setFiltred({filtred: breeds}))
      this.breedsList = breeds
    })
    
    this.filteredOptions = this.breedsControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        const filtred = name ? this._filter(name as string) : this.breedsList.slice();
        this.store.dispatch(setFiltred({filtred: filtred}))
        return filtred
      }),
    );
  }

  displayFn(breed: Breed): string {
    return breed && breed.name ? breed.name : '';
  }

  private _filter(name: string): Breed[] {
    const filterValue = name.toLowerCase();

    return this.breedsList.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  updateBreedId(id: string) {
    this.store.dispatch(setBreed({breedId: id}))
    this.store.dispatch(setFiltred({filtred: this.breedsList}))
  }
}
