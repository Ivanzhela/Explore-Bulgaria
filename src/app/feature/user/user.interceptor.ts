import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class UserInterceptor implements HttpInterceptor {
  baseUrl: string = environment.baseUrl;
  constructor(private router: Router) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (req.url.startsWith('/api')) {
      const user = localStorage.getItem('user');
      if (user) {
        req = req.clone({
          url: req.url.replace('/api', this.baseUrl),
          withCredentials: true,
          setHeaders: { 'x-authorization': JSON.parse(user).token },
        });
      } else {
        this.router.navigate(['/404']);
        return of(new HttpResponse({}));
      }
    }

    return next.handle(req);
  }
}

export const userInterceptorProvider: Provider = {
  multi: true,
  useClass: UserInterceptor,
  provide: HTTP_INTERCEPTORS,
};
