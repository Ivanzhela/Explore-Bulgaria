import { Component, Input, OnInit } from '@angular/core';
import { DeleteItemButtonService } from './delete-item-button.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/feature/user/user.service';

@Component({
  selector: 'app-delete-item-button',
  templateUrl: './delete-item-button.component.html',
  styleUrls: ['./delete-item-button.component.css'],
})
export class DeleteItemButtonComponent implements OnInit{
  @Input() category?: string | null;
  @Input() id?: string;
  @Input() itemId?: string;
  currCategory?: string | null;
  user?: any;

  constructor(
    private service: DeleteItemButtonService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
ngOnInit(): void {
  console.log(this.category);
  
  this.currCategory = this.category ? this.category : this.route.snapshot.paramMap.get('name');
  this.userService.getUser().subscribe(u => this.user = u)
}
  onDeleteItem() {
    
    const tripId = this.itemId ? this.route.snapshot.paramMap.get('id') : this.id;
    console.log('currcategory', this.currCategory);
    
    this.service.deleteItem(this.currCategory, tripId, this.itemId).subscribe({
      next: (u: any) => {
        this.userService.setUser(u);
      },
      error: (e) => console.log(e),
    });
    if(!this.itemId) {
      this.router.navigate([`/user/profile/${this.user._id}`]);
      } else {
        this.router.navigate([`/user/profile/destination/${this.currCategory}/${tripId}`]);
      }
  }
}
