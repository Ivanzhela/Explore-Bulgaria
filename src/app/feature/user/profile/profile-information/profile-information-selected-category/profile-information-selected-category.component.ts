import { Component, Input } from '@angular/core';
import { CreatedTrips } from '../../profile-types/created-trips';
import { SavedDestinations } from '../../profile-types/saved-destinations';

@Component({
  selector: 'app-profile-information-selected-category',
  templateUrl: './profile-information-selected-category.component.html',
  styleUrls: ['./profile-information-selected-category.component.css'],
})
export class ProfileInformationSelectedCategoryComponent {
  @Input() categoryName?: string;
  @Input() categoryData?: CreatedTrips[] | SavedDestinations[];
}
