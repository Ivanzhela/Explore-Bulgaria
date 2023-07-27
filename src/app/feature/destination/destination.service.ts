import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Destination, PlaceDetails } from './destination-type';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  constructor(private http: HttpClient) { }

  getDestination(query?: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `http://localhost:5000/google/destination`;
    return this.http.post<Destination>(url, { query }, {headers})
  }

}
