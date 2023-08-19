import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlacesCollection } from 'src/app/types/placesCollection';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MorePlacesLodingService {
  baseUrl:string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getMorePlaces(token: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.baseUrl}/google/load`;
    return this.http.post<PlacesCollection>(url, { nextPageToken: token }, {headers})
  }
}
