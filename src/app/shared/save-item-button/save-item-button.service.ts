import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mergeMap } from 'rxjs';
import { DestinationService } from 'src/app/feature/destination/destination.service';
import { UserService } from 'src/app/feature/user/user.service';
import { User } from 'src/app/feature/user/user-type';
import { Place } from 'src/app/types/place';

@Injectable({
  providedIn: 'root',
})
export class SaveItemButtonService {
  user?: User | null;
  destination?: Place;
  constructor(
    private http: HttpClient,
    private service: UserService,
    private destinationService: DestinationService
  ) {}

  saveItem(id?: string) {
    this.service.getUser().subscribe((u) => {
      this.user = u;
    });

    return this.destinationService.getDestination(id).pipe(
      mergeMap((d) => {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const url = `/api/auth/user/${this.user?._id}/destination/Favourites/null`;
        return this.http.post(url, { saveItem: d }, { headers });
      })
    );
  }
}
