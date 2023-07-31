import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PlanningService {
  constructor(private http: HttpClient) {}

  getPlanningDestination(query: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `http://localhost:5000/google/planning`;
    
    return this.http.post(url, query , { headers })
  }
}
