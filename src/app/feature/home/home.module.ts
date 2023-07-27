import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { IntersectionObserverDirective } from './intersection-observer.directive';
import { CategoryModule } from '../category/category.module';



@NgModule({
  declarations: [
    HomeComponent,
    IntersectionObserverDirective
  ],
  imports: [
    CommonModule,
    CategoryModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
