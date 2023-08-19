import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PlacesCollection } from 'src/app/types/placesCollection';
import { MorePlacesLodingService } from './more-places-loding.service';

@Component({
  selector: 'app-more-places-loading',
  templateUrl: './more-places-loading.component.html',
  styleUrls: ['./more-places-loading.component.css']
})
export class MorePlacesLoadingComponent {
  @Output() loadMorePlaces = new EventEmitter<PlacesCollection>();
  @Input() placesCollection?: PlacesCollection;

  constructor(private service: MorePlacesLodingService) { }

  onLoadPlaces(): void{
    if (this.placesCollection?.next_page_token) {
      this.service
        .getMorePlaces(this.placesCollection.next_page_token)
        .subscribe((p) => {
          this.loadMorePlaces.emit({next_page_token: p.next_page_token, results: [...this.placesCollection!.results, ...p.results]})
        });
    }
  }
}
