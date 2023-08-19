import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlacesCollection } from 'src/app/types/placesCollection';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NearbyPlacesService {
  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getNearby(
    category: string | undefined,
    lat: number | undefined,
    lng: number | undefined
  ) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.baseUrl}/google/destination/nearby/${category}`;
    return this.http.post<PlacesCollection>(url, { lat, lng }, { headers });
  }
}
