import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NearbyPlacesService {

  constructor(private http: HttpClient) { }

  getNearby(category: string | null, lat: number | undefined, lng: number | undefined) {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  const url = `http://localhost:5000/google/destination/nearby/${category}`;
  return this.http.post(url, {lat, lng}, {headers})
  }
}
