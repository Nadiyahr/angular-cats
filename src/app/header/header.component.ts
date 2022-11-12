import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { faCat } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class HeaderComponent implements OnInit {
  pawIcon = faPaw
  catIcon = faCat
  constructor() { }

  ngOnInit(): void {
  }

}
