import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Destination, PlaceDetails } from './destination-type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  constructor(private http: HttpClient) { }

  getDestination(query?: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${environment.baseUrl}/google/destination`;
    return this.http.post<Destination>(url, { query }, {headers})
  }

}
