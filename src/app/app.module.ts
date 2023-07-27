import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './feature/home/home.module';
import { CategoryModule } from './feature/category/category.module';
import { DestinationModule } from './feature/destination/destination.module';
import { UserModule } from './feature/user/user.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    HomeModule,
    CategoryModule,
    DestinationModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
