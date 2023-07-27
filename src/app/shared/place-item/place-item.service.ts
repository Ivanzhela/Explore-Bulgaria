import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlaceDetails } from 'src/app/feature/destination/destination-type';

@Injectable({
  providedIn: 'root'
})
export class PlaceItemService {

  constructor(private http: HttpClient) { }

  getPlaceDetails(id? : string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `http://localhost:5000/google/place`;
    return this.http.post<PlaceDetails>(url, { id }, {headers})
  }
}
