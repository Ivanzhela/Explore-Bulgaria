import { Component, Input, OnInit } from '@angular/core';
import { DeleteItemButtonService } from './delete-item-button.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/feature/user/user.service';

@Component({
  selector: 'app-delete-item-button',
  templateUrl: './delete-item-button.component.html',
  styleUrls: ['./delete-item-button.component.css']
})
export class DeleteItemButtonComponent implements OnInit{
  @Input() category?: string;
  @Input() id?: string;
  @Input() itemId?: string;
  user?: any;
  constructor(private service: DeleteItemButtonService, private userService: UserService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {

  }
  onDeleteItem() {
    this.service.deleteItem(this.category, this.id, this.itemId).subscribe({
      next: (u: any) => {this.userService.setUser(u); this.router.navigate([`/user/profile/${u._id}`])},
      error: (e) => console.log(e)

    })
  }
}
