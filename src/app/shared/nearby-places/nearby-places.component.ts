import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Place } from 'src/app/types/place';
import { NearbyPlacesService } from './destination-things-wrapper.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nearby-places',
  templateUrl: './nearby-places.component.html',
  styleUrls: ['./nearby-places.component.css']
})
export class NearbyPlacesComponent implements OnChanges{
  @Input() nameWrapper!: string | null;
  @Input() lat?: number;
  @Input() lng?: number;
  @Input() isCreatedTrip?: any;
  currNameCategory: string | null = this.nameWrapper;
  nearbyPlace: any;
  isPlacesList: boolean = false;

  constructor(private service: NearbyPlacesService, private route: ActivatedRoute) {}

  ngOnChanges(changes: SimpleChanges): void {
    if(!this.isCreatedTrip) {
      this.service.getNearby(this.nameWrapper, this.lat, this.lng).subscribe(places => this.nearbyPlace = places
      )
      } else {
        const id = this.route.snapshot.paramMap.get('id');
        this.nearbyPlace = this.isCreatedTrip
      }
  }
  onPlacesList(name?: string) {
    this.isPlacesList = !this.isPlacesList;
    if(name) {
      this.currNameCategory = name;
    }
  }


}
