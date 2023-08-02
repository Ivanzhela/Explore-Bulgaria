import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-selected-category-item',
  templateUrl: './selected-category-item.component.html',
  styleUrls: ['./selected-category-item.component.css']
})
export class SelectedCategoryItemComponent{
  @Input() categoryName?: string;
  @Input() categoryData?: any;
}
