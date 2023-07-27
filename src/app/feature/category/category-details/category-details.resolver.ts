import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { PlacesCollection } from 'src/app/types/placesCollection';
import { CategoryDetailsService } from './category-details.service';
import { enumMapping } from './category-details-enum';
import { CategoryDetailsComponent } from './category-details.component';

interface Resolve<T> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<T> | Promise<T> | T
}

@Injectable({ providedIn: 'root' })
export class CatgoryDetailsResolver implements Resolve<PlacesCollection> {
  
  constructor(private service: CategoryDetailsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<PlacesCollection> | Promise<PlacesCollection> | PlacesCollection {

    const queryParams = route.queryParams;
    const subcategory = queryParams['subcategory'];
    const category = queryParams['category'];
    const defaultCategoryQuery = enumMapping[category][Object.keys(enumMapping[category])[0]];
    const subcategoryQuery = enumMapping[category][subcategory];
    const query = subcategory !== undefined ? subcategoryQuery : defaultCategoryQuery;
    
    return this.service.getCategory(query);
  }
}
