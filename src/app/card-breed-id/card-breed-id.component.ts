import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faWikipediaW } from '@fortawesome/free-brands-svg-icons';
import { Breed } from '../shared/types';

@Component({
  selector: 'app-card-breed-id',
  templateUrl: './card-breed-id.component.html',
  styleUrls: ['./card-breed-id.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardBreedIdComponent implements OnInit {
  @Input() details!: Breed
  panelOpenState = false
  starIcon = faStar
  wikiIcon = faWikipediaW
  ranks!: [string, number][]

  constructor() { }

  ngOnInit(): void {
    this.ranks = this.getEntryesOfRanks()
  }

  getImg() {
    return this.details.image.url
  }

  getArrayFromNumber(num: number) {
    return [...Array(num).keys()]
  }

  getEntryesOfRanks(): [string, number][] {
    const mapDetails = Object.entries(this.details)
      .filter(item => typeof item[1] === 'number' && item[1] > 0)
      .sort((a, b) => b[1] - a[1])

    return mapDetails
  }
}
