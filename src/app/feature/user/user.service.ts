import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { User } from 'src/app/types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user = new BehaviorSubject<any | null | undefined>(null);

  constructor(private http: HttpClient, private router: Router) {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const currUser = JSON.parse(storedUser);
      this.getUserData(currUser._id).subscribe((u) =>
        this.user.next(u)
      );
    }    
  }

  authUser(user?: any, path?: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `http://localhost:5000/auth/${path}`;
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
  // async setUser(id: string | null | undefined): Promise<void> {
  //   try {
  //     const userData = await this.getUserData(id).toPromise();
  //     this.user.next(userData);
  //   } catch (error) {
  //     console.log(error);
      
  //   }
  // }
  setUser(userData: any) {
    this.user.next(userData);
  }
  getUserData(id: string | null | undefined) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `/api/auth/user/${id}`;
    return this.http.get<User>(url, { headers });
  }
  getItem(category: string | null, id: string | null): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const storedUser = localStorage.getItem('user');
    const currUser = storedUser ? JSON.parse(storedUser) : '';
    const url = `/api/auth/user/${currUser._id}/destination/${category}/${id}`;
    return this.http.get(url, {headers})
  }
  logoutUser(): void {
    localStorage.removeItem('user');
    this.user.next(null);
    this.router.navigate(['/']);
  }
}
