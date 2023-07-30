import { Component, Input, OnInit } from '@angular/core';
import { Place } from 'src/app/types/place';
import { NearbyPlacesService } from './destination-things-wrapper.service';

@Component({
  selector: 'app-nearby-places',
  templateUrl: './nearby-places.component.html',
  styleUrls: ['./nearby-places.component.css']
})
export class NearbyPlacesComponent implements OnInit{
  @Input() nameWrapper!: string | null;
  @Input() lat?: number;
  @Input() lng?: number;
  @Input() isCreatedTrip?: boolean;
  currNameCategory: string | null = this.nameWrapper;
  nearbyPlace: any;
  isPlacesList: boolean = false;

  constructor(private service: NearbyPlacesService) {}

  ngOnInit(): void {
    if(!this.isCreatedTrip) {
    this.service.getNearby(this.nameWrapper, this.lat, this.lng).subscribe(places => this.nearbyPlace = places
    )
    }
  }

  onPlacesList(name?: string) {
    this.isPlacesList = !this.isPlacesList;
    if(name) {
      this.currNameCategory = name;
    }
  }


}
