import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  user?: User;
  profileOption?: string = 'information'
  constructor(private route: ActivatedRoute, private service: UserService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getUser(id).subscribe((u) => {
      this.user = u;      
    });
  }

  onProfileOptions(option: string) {
    this.profileOption = option;
  }
}
