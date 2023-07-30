import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Place } from 'src/app/types/place';
import { NearbyPlacesService } from '../nearby-places/destination-things-wrapper.service';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent implements OnInit {
  @Input() places?: Place[];
  @Input() isDetailsTripCategory?: any;
  @Input() closeList!: Function;
  currPlaces?: any;

  constructor(private service: NearbyPlacesService) {}

  ngOnInit(): void {
    if(this.isDetailsTripCategory !== undefined) {
      const { category, lat, lng } = this.isDetailsTripCategory;
      this.service.getNearby(category, lat, lng).subscribe(p => this.currPlaces = p)
    } else {
      this.currPlaces = this.places
    }
    
  }
}
