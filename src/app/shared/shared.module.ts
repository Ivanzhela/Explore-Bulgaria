import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanningComponent } from './planning/planning.component';
import { PlaceItemComponent } from './place-item/place-item.component';
import { RouterModule } from '@angular/router';
import { RatingComponent } from './rating/rating.component';
import { MapComponent } from './map/map.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { PlanningFormValidationDirective } from './planning/planning-form-validation.directive';
import { HeroComponent } from './hero/hero.component';
import { SliderComponent } from './slider/slider.component';
import { TripDateComponent } from './trip-date/trip-date.component';
import { NearbyPlacesComponent } from './nearby-places/nearby-places.component';
import { PlacesListComponent } from './places-list/places-list.component';
import { AddItemButtonComponent } from './add-item-button/add-item-button.component';
import { DeleteItemButtonComponent } from './delete-item-button/delete-item-button.component';
import { SaveItemButtonComponent } from './save-item-button/save-item-button.component';
import { SearchComponent } from './search/search.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoadingComponent } from './loading/loading.component';
import { LoadingPipe } from './loading/loading.pipe';



@NgModule({
  declarations: [
    PlanningComponent,
    PlaceItemComponent,
    RatingComponent,
    MapComponent,
    PlanningFormValidationDirective,
    HeroComponent,
    SliderComponent,
    TripDateComponent,
    NearbyPlacesComponent,
    PlacesListComponent,
    AddItemButtonComponent,
    DeleteItemButtonComponent,
    SaveItemButtonComponent,
    SearchComponent,
    NotFoundComponent,
    LoadingComponent,
    LoadingPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    PlanningComponent,
    PlaceItemComponent,
    RatingComponent,
    MapComponent,
    HeroComponent,
    SliderComponent,
    TripDateComponent,
    NearbyPlacesComponent,
    PlacesListComponent,
    AddItemButtonComponent,
    DeleteItemButtonComponent,
    SaveItemButtonComponent,
    SearchComponent,
    NotFoundComponent,
    LoadingComponent,
    LoadingPipe
  ]
})
export class SharedModule { }
