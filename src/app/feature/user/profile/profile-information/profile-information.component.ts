import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.component.html',
  styleUrls: ['./profile-information.component.css'],
})
export class ProfileInformationComponent implements OnChanges{
  @Input() createdTrips?: User;
  @Input() savedDestinations?: User;
  selectedCategory?: string;
  selectedCategoryData?: User;

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
