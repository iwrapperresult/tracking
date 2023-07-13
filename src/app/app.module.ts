import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrackingPageComponent } from './tracking-page/tracking-page.component';
import { HeaderComponent } from './header/header.component';
import { LocationTrackComponent } from './location-track/location-track.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DriverPageComponent } from './driver-page/driver-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackingPageComponent,
    HeaderComponent,
    LocationTrackComponent,
    DriverPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
