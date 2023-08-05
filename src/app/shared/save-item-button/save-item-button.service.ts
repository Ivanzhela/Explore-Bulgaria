import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { flatMap, mergeMap } from 'rxjs';
import { DestinationService } from 'src/app/feature/destination/destination.service';
import { UserService } from 'src/app/feature/user/user.service';
import { User } from 'src/app/types/user';

@Injectable({
  providedIn: 'root'
})
export class SaveItemButtonService {
  user?: User | null;
  destination?: any;
  constructor(private http: HttpClient, private service: UserService, private destinationService: DestinationService) {
  }

  saveItem(id?: any) {
    this.service.getUser().subscribe((u) => {
      this.user = u;      
    });

    return this.destinationService.getDestination(id).pipe(
      mergeMap((d) => {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const url = `/api/auth/user/${this.user?._id}/destination/Favourites/null`;
        return this.http.post(url, { saveItem: d }, { headers });
      })
    )
  }
}
