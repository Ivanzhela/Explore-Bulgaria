import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DestinationService } from './destination.service';
import { Destination } from './destination-type';

interface Resolve<T> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<T> | Promise<T> | T;
}

@Injectable({ providedIn: 'root' })
export class DestinationResolver implements Resolve<Destination> {
  constructor(private service: DestinationService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<Destination> | Promise<Destination> | Destination {
    const params = route.params;
    const destinationId = params['id'];

    return this.service.getDestination(destinationId);
  }
}
