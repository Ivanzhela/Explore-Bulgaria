import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'src/app/feature/user/user.service';
import { User } from 'src/app/feature/user/user-type';

@Injectable({
  providedIn: 'root',
})
export class DeleteItemButtonService {
  user?: User | null;
  
  constructor(private http: HttpClient, private service: UserService) {}

  deleteItem(category?: string | null, id?: string | null, itemId?: string) {
    this.service.getUser().subscribe((u) => {
      this.user = u;
    });
    const body =
      itemId != undefined ? { deleteItem: itemId } : { deleteTrip: id };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `/api/auth/user/${this.user?._id}/destination/${category}/${id}`;
    return this.http.post(url, body, { headers });
  }
}
