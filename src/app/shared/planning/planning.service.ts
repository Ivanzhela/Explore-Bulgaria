import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlanningService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getPlanningDestination(query: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.baseUrl}/google/planning`;

    return this.http.post(url, query, { headers });
  }
}
