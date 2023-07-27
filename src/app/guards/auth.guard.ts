import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from '../feature/user/user.service';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  user: User | null | undefined;
  constructor(private service: UserService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
    this.service.getLocalUser().subscribe((u) => {
      this.user = u;
    });;

    if (this.user) {
      return true;
    } else {
      this.router.navigate(['/user/auth']);
      return false;
    }
  }
}