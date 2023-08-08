import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlacesCollection } from 'src/app/types/placesCollection';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryDetailsService {

  constructor(private http: HttpClient) { }

  getCategory(query?: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${environment.baseUrl}/google/category`;
    return this.http.post<PlacesCollection>(url, { query }, {headers})
  }
}
