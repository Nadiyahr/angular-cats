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
  }

  getBreed() {
    return this.card.breeds.length > 0 ? this.card.breeds[0].name : 'No breed'
  }
}
