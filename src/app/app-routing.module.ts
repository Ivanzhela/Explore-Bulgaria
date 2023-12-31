import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { DestinationComponent } from './feature/destination/destination.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { DestinationResolver } from './feature/destination/destination.resolver';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {
    path: 'user',
    loadChildren: () =>
      import('./feature/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'category',
    loadChildren: () =>
      import('./feature/category/category.module').then(
        (m) => m.CategoryModule
      ),
  },
  {
    path: 'destination/:id',
    component: DestinationComponent,
    resolve: {
      data: DestinationResolver,
    },
  },
  { path: '**', component: NotFoundComponent },
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
