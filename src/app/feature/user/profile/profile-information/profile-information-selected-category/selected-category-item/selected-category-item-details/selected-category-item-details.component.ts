import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectedCategoryItemDetailsService } from './selected-category-item-details.service';

@Component({
  selector: 'app-selected-category-item-details',
  templateUrl: './selected-category-item-details.component.html',
  styleUrls: ['./selected-category-item-details.component.css']
})
export class SelectedCategoryItemDetailsComponent implements OnInit{
  destination: any;
  id?:string | null;
  category?: string | null;
  constructor(private route: ActivatedRoute, private service: SelectedCategoryItemDetailsService) {}

  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('name');
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getItem(this.category, this.id).subscribe((i) => this.destination = i[0])
  }
}
