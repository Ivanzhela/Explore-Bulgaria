import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { User } from 'src/app/types/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user = new BehaviorSubject<any | null | undefined>(null);
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient, private router: Router) {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const currUser = JSON.parse(storedUser);
      this.getUserData(currUser._id).subscribe((u) => this.user.next(u));
    }
  }

  authUser(user?: any, path?: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.baseUrl}/auth/${path}`;
    return this.http.post<User>(url, user, { headers }).pipe(
      tap((data: User) => {
        localStorage.setItem('user', JSON.stringify(data));
        this.getUserData(data._id).subscribe((u) => this.user.next(u));
      })
    );
  }
  getUser(): Observable<User | null | undefined> {
    return this.user.asObservable();
  }

  setUser(userData: any) {
    this.user.next(userData);
  }
  getUserData(id: string | null | undefined) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `/api/auth/user/${id}`;
    return this.http.get<User>(url, { headers });
  }
  setUserData(userData: User) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const storedUser = localStorage.getItem('user');
    const currUser = storedUser ? JSON.parse(storedUser) : '';
    const url = `/api/auth/user/${currUser._id}`;
    return this.http.post<User>(url, userData, { headers });
  }

  getItem(category: string | null, id: string | null): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const storedUser = localStorage.getItem('user');
    const currUser = storedUser ? JSON.parse(storedUser) : '';
    const url = `/api/auth/user/${currUser._id}/destination/${category}/${id}`;
    return this.http.get(url, { headers });
  }
  logoutUser(): void {
    localStorage.clear();
    this.user.next(null);
    this.router.navigate(['/']);
  }
}
