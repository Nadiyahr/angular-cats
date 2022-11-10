import { Breed } from '../shared/types';
import { Component, Input, OnInit } from '@angular/core';
import { CatImg } from '../shared/types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card!: CatImg;
  // breed: Breed[] = this.card.breeds
  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit', this.card);
    
  }
}
