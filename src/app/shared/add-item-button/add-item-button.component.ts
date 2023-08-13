import { Component, Input, OnInit } from '@angular/core';
import { AddItemButtonService } from './add-item-button.service';
import { UserService } from 'src/app/feature/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Place } from 'src/app/types/place';
import { User } from 'src/app/feature/user/user-type';

@Component({
  selector: 'app-add-item-button',
  templateUrl: './add-item-button.component.html',
  styleUrls: ['./add-item-button.component.css'],
})
export class AddItemButtonComponent implements OnInit {
  @Input() item?: Place;
  category?: string | null;
  id?: string | null;
  user?: User;

  constructor(
    private service: AddItemButtonService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('name');
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser().subscribe(u => this.user = u as User)
  }
  
  onAddItem() {
    this.service.addItem(this.category, this.id, this.item).subscribe({
      next: (u) => {
        this.userService.setUser(u as User);
        this.router.navigate([
          `user/profile/destination/${this.category}/${this.id}`,
        ]);
      },
      error: (e) => console.log(e),
    });
  }
}
