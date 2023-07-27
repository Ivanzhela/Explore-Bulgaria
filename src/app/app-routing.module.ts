import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { CategoryComponent } from './feature/category/category.component';
import { DestinationComponent } from './feature/destination/destination.component';
import { ProfileComponent } from './feature/user/profile/profile.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'category', loadChildren: () => import('./feature/category/category.module').then(m => m.CategoryModule) },
  { path: 'destination/:id', component: DestinationComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
