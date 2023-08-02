import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/feature/user/user.service';
import { User } from 'src/app/types/user';

@Injectable({
  providedIn: 'root'
})
export class SelectedCategoryItemDetailsService {
  user?: User | null;

  // constructor(private http: HttpClient, private service: UserService) { 
  //   this.service.getUser().subscribe((u) => {
  //     this.user = u;   
         
  //   });
  // }

}
