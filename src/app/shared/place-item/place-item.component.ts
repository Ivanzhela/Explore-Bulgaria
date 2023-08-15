import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PlaceDetails } from 'src/app/feature/destination/destination-type';
import { Place } from 'src/app/types/place';
import { PlaceItemService } from './place-item.service';
import { GOOGLE_KEY } from 'src/config';

@Component({
  selector: 'app-place-item',
  templateUrl: './place-item.component.html',
  styleUrls: ['./place-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaceItemComponent {
  @Input() place?: Place;
  placeDetails!: PlaceDetails;
  placeDetailsCheck: boolean = false;
  key: string = GOOGLE_KEY;
  isLoading: boolean = true;

  constructor(private service: PlaceItemService) {}

  getDetailsOn() {
    !this.placeDetailsCheck &&
      this.service.getPlaceDetails(this.place?.place_id).subscribe((data) => {
        this.placeDetails = data;
      });
    this.placeDetailsCheck = true;
  }
  getImgItem(): string {
     return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photoreference=${this.place?.photos}&key=${this.key}`
  }
  onLoading() {
    this.isLoading = false;
  }
}
