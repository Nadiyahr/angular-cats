import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CatImg } from '../shared/types';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {
  @Input() card!: CatImg
  pawIcon = faPaw

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit', this.card);
  }

  getBreed() {
    return this.card.breeds[0].name
  }
}
