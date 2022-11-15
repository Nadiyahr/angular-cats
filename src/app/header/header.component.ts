import { selectWidth } from './../shared/store/width/width.selector';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { faCat } from '@fortawesome/free-solid-svg-icons';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class HeaderComponent implements OnInit {
  pawIcon = faPaw
  catIcon = faCat
  isDesktop!: boolean
  width$ = this.store.pipe(select(selectWidth))

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.width$.subscribe(width => {
      this.isDesktop = width > 600
    })
  }

}
