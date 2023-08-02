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
  category?: string | null;
  @Input() id?: string;
  @Input() itemId?: string;
  user?: any;

  constructor(
    private service: DeleteItemButtonService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
ngOnInit(): void {
  this.category = this.route.snapshot.paramMap.get('name');
  this.userService.getUser().subscribe(u => this.user = u)
}
  onDeleteItem() {
    
    const tripId = this.itemId ? this.route.snapshot.paramMap.get('id') : this.id;
    console.log(this.category);
    
    this.service.deleteItem(this.category, tripId, this.itemId).subscribe({
      next: (u: any) => {
        this.userService.setUser(u);
      },
      error: (e) => console.log(e),
    });
    if(!this.itemId) {
      this.router.navigate([`/user/profile/${this.user._id}`]);
      } else {
        this.router.navigate([`/user/profile/destination/${this.category}/${tripId}`]);
      }
  }
}
