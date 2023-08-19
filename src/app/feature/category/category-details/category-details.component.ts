import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PlacesCollection } from 'src/app/types/placesCollection';
import { enumMapping } from './category-details-enum';
import { UserService } from '../../user/user.service';
import { User } from 'src/app/feature/user/user-type';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css'],
})
export class CategoryDetailsComponent implements OnInit {
  category!: string;
  categoryImg?: string;
  places?: any;
  categoryOptions?: string[];
  currCategoryOptions?: string;
  user?: User | null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.category = params['category'];
      this.categoryImg = params['img'];
      this.categoryOptions = Object.keys(enumMapping[this.category]);
    });

    this.route.data.subscribe((data) => {
      this.places = data['data'];
    });
    this.userService.getUser().subscribe((u) => {
      this.user = u;
    });
  }

  onCategoryOptions(option: string): void {
    this.currCategoryOptions = option;
    const queryParams = { subcategory: option };
    this.router.navigate([], {
      queryParams: queryParams,
      queryParamsHandling: 'merge',
    });
  }

  onMorePlacesLoad(loadPlaces: PlacesCollection): void {
    this.places = loadPlaces
  }
}
