import { Component, Input, OnInit } from '@angular/core';
import { GOOGLE_KEY } from 'src/config';

@Component({
  selector: 'app-selected-category-item',
  templateUrl: './selected-category-item.component.html',
  styleUrls: ['./selected-category-item.component.css'],
})
export class SelectedCategoryItemComponent {
  @Input() categoryName?: string;
  @Input() categoryData?: any;
  key: string = GOOGLE_KEY;
}
