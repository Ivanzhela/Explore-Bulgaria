import { Component, Input, OnInit } from '@angular/core';
import { SaveItemButtonService } from './save-item-button.service';
import { UserService } from 'src/app/feature/user/user.service';
import { User } from 'src/app/feature/user/user-type';
import { DeleteItemButtonService } from '../delete-item-button/delete-item-button.service';

@Component({
  selector: 'app-save-item-button',
  templateUrl: './save-item-button.component.html',
  styleUrls: ['./save-item-button.component.css'],
})
export class SaveItemButtonComponent implements OnInit {
  @Input() destinationId?: string;
  user?: User;
  isSave?: boolean = false;

  constructor(
    private service: SaveItemButtonService,
    private userService: UserService,
    private deleteService: DeleteItemButtonService
  ) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe((u) => (this.user = u as User));
    this.isSave = this.user?.savedDestinations.some(
      (d) => d.id == this.destinationId
    );
  }

  onSavePlace() {
    if (this.isSave) {
      this.deleteService
        .deleteItem('Favourites', this.destinationId)
        .subscribe({
          next: (u) => {
            this.userService.setUser(u as User);
          },
          error: (e) => console.log(e),
        });
      this.isSave = false;
    } else {
      this.service.saveItem(this.destinationId).subscribe({
        next: (u) => {
          this.userService.setUser(u as User);
        },
        error: (e) => console.log(e),
      });
    }
  }
}
