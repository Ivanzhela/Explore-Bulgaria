import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NearbyPlacesService {
  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getNearby(category: string | null, lat: number | undefined, lng: number | undefined) {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  const url = `${this.baseUrl}/google/destination/nearby/${category}`;
  return this.http.post(url, {lat, lng}, {headers})
  }
}
