import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Place } from 'src/app/types/place';
import { NearbyPlacesService } from '../nearby-places/destination-things-wrapper.service';
import { PlacesCollection } from 'src/app/types/placesCollection';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css'],
})
export class PlacesListComponent implements OnChanges {
  @Input() places!: Place[];
  @Input() nextPageToken: string = '';
  @Input() isDetailsTripCategory?: {
    category?: string;
    lat?: number;
    lng?: number;
  };
  @Output() closeList = new EventEmitter<string>();
  @Output() loadMorePlaces = new EventEmitter<PlacesCollection>()
  currPlaces!: Place[] | [];

  constructor(private service: NearbyPlacesService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isDetailsTripCategory !== undefined) {
      const { category, lat, lng } = this.isDetailsTripCategory;
      this.service.getNearby(category, lat, lng).subscribe((p) => {
        this.currPlaces = p.results as Place[];
        this.nextPageToken = p.next_page_token;
        console.log(this.nextPageToken);
        
      });
    } else {
      this.currPlaces = this.places;
    }
  }
  onCloseList() {
    this.closeList.emit('');
  }

  onMorePlacesLoad(loadPlaces: PlacesCollection): void {
    console.log(loadPlaces);
    
    this.loadMorePlaces.emit(loadPlaces)
  }
}
