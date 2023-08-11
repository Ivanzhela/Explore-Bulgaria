import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/feature/user/user.service';
import { CreatedTrips } from '../../../../profile-types/created-trips';
import { SavedDestinations } from '../../../../profile-types/saved-destinations';
import { User } from 'src/app/feature/user/user-type';

@Component({
  selector: 'app-selected-category-item-details',
  templateUrl: './selected-category-item-details.component.html',
  styleUrls: ['./selected-category-item-details.component.css'],
})
export class SelectedCategoryItemDetailsComponent implements OnInit {
  destination?: any;
  id?: string | null;
  category?: string | null;
  user?: User | null;
  isAddPlace: boolean = false;
  placeCategory?: string;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('name');
    const currCategory: string =
      this.route.snapshot.paramMap.get('name') == 'Favourites'
        ? 'savedDestinations'
        : 'createdTrips';
    this.id = this.route.snapshot.paramMap.get('id');

    this.userService.getUser().subscribe((u: any) => {
      this.user = u;
      this.destination = u
        ? u[currCategory].find(
            (t: SavedDestinations | CreatedTrips) => t.id == this.id
          )
        : null;
    });
  }

  onAddPlaces(category: string) {
    this.isAddPlace = !this.isAddPlace;
    this.placeCategory = category;
  }
}
