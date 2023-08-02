import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectedCategoryItemDetailsService } from './selected-category-item-details.service';
import { User } from 'src/app/types/user';
import { UserService } from 'src/app/feature/user/user.service';

@Component({
  selector: 'app-selected-category-item-details',
  templateUrl: './selected-category-item-details.component.html',
  styleUrls: ['./selected-category-item-details.component.css']
})
export class SelectedCategoryItemDetailsComponent implements OnInit{
  destination: any;
  id?:string | null;
  category?: string | null;
  user?: User | null;
  isAddPlace: boolean = false;
  placeCategory?: string;
  constructor(private route: ActivatedRoute, private service: SelectedCategoryItemDetailsService, private userService: UserService) {
  }
  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('name');
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser().subscribe((u) => {
      this.user = u; 
      this.destination = this.user?.createdTrips.find((t: any) => t.id == this.id) 
    });    
  }

  onAddPlaces(category: string) {
    this.isAddPlace = !this.isAddPlace;
    this.placeCategory = category;
  }

}
