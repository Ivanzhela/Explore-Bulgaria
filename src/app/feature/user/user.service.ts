import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { User } from 'src/app/types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient, private router: Router) {}
  authUser(user?: any, path?: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `http://localhost:5000/auth/${path}`;
    return this.http.post<User>(url, user, { headers }).pipe(
      tap((data: User) => {
        localStorage.setItem('user', JSON.stringify(data));
        this.user.next(user);
      })
    );
  }

  getLocalUser(): Observable<User | null> {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      this.user.next(parsedUser);
    }
    return this.user.asObservable();
  }

  getUser(id: string | null) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `/api/auth/user/${id}`;
    return this.http.get<User>(url, {headers})
  }

  logoutUser(): void {
    localStorage.removeItem('user');
    this.user.next(null);
    this.router.navigate(['/']);
  }
}
