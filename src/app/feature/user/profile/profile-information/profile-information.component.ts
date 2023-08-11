import { Component, Input, OnChanges } from '@angular/core';
import { CreatedTrips } from '../profile-types/created-trips';
import { SavedDestinations } from '../profile-types/saved-destinations';

@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.component.html',
  styleUrls: ['./profile-information.component.css'],
})
export class ProfileInformationComponent implements OnChanges {
  @Input() createdTrips?: CreatedTrips[];
  @Input() savedDestinations?: SavedDestinations[];
  selectedCategory?: string;
  selectedCategoryData?: CreatedTrips[] | SavedDestinations[];

  ngOnChanges(): void {
    this.selectedCategory = 'Upcoming trips';
    this.selectedCategoryData = this.createdTrips;
  }

  onSelectedCategory(category: string): void {
    this.selectedCategory = category;
    category == 'Favourites'
      ? (this.selectedCategoryData = this.savedDestinations)
      : (this.selectedCategoryData = this.createdTrips);
  }
}
