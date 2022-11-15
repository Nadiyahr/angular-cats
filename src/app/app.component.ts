import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { setWidth } from './shared/store/width/width.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class AppComponent {
  title = 'angular-app';

  constructor(private store: Store) { }
  
  ngOnInit() {
    this.store.dispatch(setWidth({width: window.innerWidth}))
  }
  
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.store.dispatch(setWidth({width: window.innerWidth}))
  }
}
