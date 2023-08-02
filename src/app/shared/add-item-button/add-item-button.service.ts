import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'src/app/feature/user/user.service';
import { User } from 'src/app/types/user';

@Injectable({
  providedIn: 'root'
})
export class AddItemButtonService {
  user?: User | null;
  
  constructor(private http: HttpClient, private service: UserService) { }

  addItem(category?: string | null, id?: string | null, item?: any) {
    this.service.getUser().subscribe((u) => {
      this.user = u;      
    });
    
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `/api/auth/user/${this.user?._id}/destination/${category}/${id}`;
    return this.http.post(url, { addItem: item }, {headers})
  }
}
