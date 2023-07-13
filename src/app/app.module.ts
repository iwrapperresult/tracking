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
import { AdminComponent } from './admin/admin.component';
import { FormComponent } from './form/form.component';
import { FormService } from './form/form.service';

@NgModule({
  declarations: [
    AppComponent,
    TrackingPageComponent,
    HeaderComponent,
    LocationTrackComponent,
    DriverPageComponent,
    AdminComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
