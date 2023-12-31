import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Place } from 'src/app/types/place';
import { NearbyPlacesService } from './destination-things-wrapper.service';
import { ActivatedRoute } from '@angular/router';
import { PlacesCollection } from 'src/app/types/placesCollection';

@Component({
  selector: 'app-nearby-places',
  templateUrl: './nearby-places.component.html',
  styleUrls: ['./nearby-places.component.css'],
})
export class NearbyPlacesComponent implements OnChanges {
  @Input() nameWrapper!: string | undefined;
  @Input() lat?: number;
  @Input() lng?: number;
  @Input() isCreatedTrip?: Place[];
  currNameCategory: string | undefined = this.nameWrapper;
  nearbyPlace!: Place[];
  nextPageToken!: string;
  isPlacesList: boolean = false;

  constructor(
    private service: NearbyPlacesService,
    private route: ActivatedRoute
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.isCreatedTrip) {
      this.service
        .getNearby(this.nameWrapper, this.lat, this.lng)
        .subscribe((places) => {
          this.nearbyPlace = places.results as Place[];
          this.nextPageToken = places.next_page_token;
        });
    } else {
      const id = this.route.snapshot.paramMap.get('id');
      this.nearbyPlace = this.isCreatedTrip;
    }
  }
  onPlacesList(name?: string) {
    this.isPlacesList = !this.isPlacesList;
    if (name) {
      this.currNameCategory = name;
    }
  }

  morePlacesLoad(loadPlaces: PlacesCollection): void {    
    this.nearbyPlace = loadPlaces.results
    this.nextPageToken = loadPlaces.next_page_token
  }
}
