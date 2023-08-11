import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from 'src/app/feature/user/user-type';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user?: User | null;
  profileOption?: string = 'information';
  constructor(private route: ActivatedRoute, private service: UserService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getUser().subscribe((u) => {
      this.user = u;
    });
  }

  onProfileOptions(option: string) {
    this.profileOption = option;
  }
}
