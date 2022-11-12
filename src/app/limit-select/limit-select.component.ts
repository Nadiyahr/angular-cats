import { getLimit } from './../shared/store/app.selectors';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { setLimit } from '../shared/store/app.actions';

@Component({
  selector: 'app-limit-select',
  templateUrl: './limit-select.component.html',
  styleUrls: ['./limit-select.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LimitSelectComponent implements OnInit {
  limit: string = '10'
  limitControl = new FormControl('12')
  options: string[] = ['12', '15', '18', '21', '24', '27', '30']
  limit$ = this.store.pipe(select(getLimit))

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.limit$.subscribe(value => {
      this.limit = value
    })
    this.limitControl.valueChanges.subscribe((value) => {
      if (typeof value === 'string') {
        this.store.dispatch(setLimit({limit: value}))
      }
    })
  }

}
