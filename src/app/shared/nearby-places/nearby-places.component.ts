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
  nearbyPlace: any;

  constructor(private service: NearbyPlacesService) {}

  ngOnInit(): void {
    this.service.getNearby(this.nameWrapper, this.lat, this.lng).subscribe(places => this.nearbyPlace = places
    )
  }

}
