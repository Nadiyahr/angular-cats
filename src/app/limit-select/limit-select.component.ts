import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { setLimit } from '../shared/store/limit/limit.action';
import { selectLimit } from '../shared/store/limit/limit.selector';

@Component({
  selector: 'app-limit-select',
  templateUrl: './limit-select.component.html',
  styleUrls: ['./limit-select.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LimitSelectComponent implements OnInit {
  limit: string = '10'
  limitControl = new FormControl(this.limit)
  options: string[] = ['10', '15', '20', '25']
  limit$ = this.store.pipe(select(selectLimit))

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.limit$.subscribe(value => {
      this.limit = value
    })
    this.limitControl.valueChanges.subscribe((value) => {
      if (typeof value === 'string') {
        this.store.dispatch(setLimit({value: value}))
      }
    })
  }

}
