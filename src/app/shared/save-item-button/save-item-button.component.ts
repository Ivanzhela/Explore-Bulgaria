import { Component, Input } from '@angular/core';
import { Place } from 'src/app/types/place';
import { SaveItemButtonService } from './save-item-button.service';
import { UserService } from 'src/app/feature/user/user.service';

@Component({
  selector: 'app-save-item-button',
  templateUrl: './save-item-button.component.html',
  styleUrls: ['./save-item-button.component.css']
})
export class SaveItemButtonComponent {
  @Input() destinationId?: string;

  constructor(private service: SaveItemButtonService, private userService: UserService) {}

  onSavePlace() {
    this.service.saveItem(this.destinationId).subscribe({
      next: (u: any) => {
        this.userService.setUser(u);
      },
      error: (e) => console.log(e),
    })
  }
}
