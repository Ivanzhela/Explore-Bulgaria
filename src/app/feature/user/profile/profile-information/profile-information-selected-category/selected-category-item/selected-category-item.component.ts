import { Component, Input } from '@angular/core';
import { GOOGLE_KEY } from 'src/config';
import { CreatedTrips } from '../../../profile-types/created-trips';
import { SavedDestinations } from '../../../profile-types/saved-destinations';

@Component({
  selector: 'app-selected-category-item',
  templateUrl: './selected-category-item.component.html',
  styleUrls: ['./selected-category-item.component.css'],
})
export class SelectedCategoryItemComponent {
  @Input() categoryName?: string;
  @Input() categoryData?: CreatedTrips[] | SavedDestinations[] | any;
  key: string = GOOGLE_KEY;
}
