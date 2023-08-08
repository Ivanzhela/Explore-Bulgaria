import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/types/user';
import { GOOGLE_KEY } from 'src/config';
@Component({
  selector: 'app-selected-category-item',
  templateUrl: './selected-category-item.component.html',
  styleUrls: ['./selected-category-item.component.css']
})
export class SelectedCategoryItemComponent implements OnInit{
  @Input() categoryName?: string;
  @Input() categoryData?: any;
  key: string = GOOGLE_KEY;

  ngOnInit(): void {
    console.log(this.categoryData, this.categoryName);
    
  }

}
