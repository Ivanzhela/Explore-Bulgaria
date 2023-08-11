import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationComponent } from './destination.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { DestinationNavComponent } from './destination-nav/destination-nav.component';
import { DestinationAboutComponent } from './destination-about/destination-about.component';

@NgModule({
  declarations: [
    DestinationComponent,
    DestinationNavComponent,
    DestinationAboutComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    DestinationComponent,
    DestinationAboutComponent,
    DestinationNavComponent
  ]
})
export class DestinationModule { }
