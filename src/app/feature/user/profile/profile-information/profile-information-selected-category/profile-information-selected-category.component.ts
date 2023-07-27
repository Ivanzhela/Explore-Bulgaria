import { Component, Input } from '@angular/core';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-profile-information-selected-category',
  templateUrl: './profile-information-selected-category.component.html',
  styleUrls: ['./profile-information-selected-category.component.css']
})
export class ProfileInformationSelectedCategoryComponent {
@Input() categoryName?: string;
@Input() categoryData?: User;

}
