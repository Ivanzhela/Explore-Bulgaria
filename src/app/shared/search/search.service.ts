import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Place } from 'src/app/types/place';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getSearchDestination(title? : string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `http://localhost:5000/google/search`;
    return this.http.post<Place>(url, { destination: title }, {headers})
  }
}
