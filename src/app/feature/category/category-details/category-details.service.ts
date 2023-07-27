import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlacesCollection } from 'src/app/types/placesCollection';

@Injectable({
  providedIn: 'root'
})
export class CategoryDetailsService {

  constructor(private http: HttpClient) { }

  getCategory(query?: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `http://localhost:5000/google/category`;
    return this.http.post<PlacesCollection>(url, { query }, {headers})
  }
}
