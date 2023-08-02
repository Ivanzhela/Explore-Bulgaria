import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Place } from 'src/app/types/place';
import { NearbyPlacesService } from '../nearby-places/destination-things-wrapper.service';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css'],
})
export class PlacesListComponent implements OnChanges {
  @Input() places?: Place[];
  @Input() isDetailsTripCategory?: any;
  @Output() closeList = new EventEmitter<string>();
  currPlaces?: any;

  constructor(private service: NearbyPlacesService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isDetailsTripCategory !== undefined) {
      const { category, lat, lng } = this.isDetailsTripCategory;
      this.service
        .getNearby(category, lat, lng)
        .subscribe((p) => (this.currPlaces = p));
    } else {
      this.currPlaces = this.places;
    }
  }
  onCloseList() {
    this.closeList.emit('');
  }
}
