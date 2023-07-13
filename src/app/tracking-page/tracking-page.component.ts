import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { TrackingService } from './tracking-page.service';
import { Packages } from './tracking-page.dto';

@Component({
  selector: 'app-tracking-page',
  templateUrl: './tracking-page.component.html',
  styleUrls: ['./tracking-page.component.sass']
})
export class TrackingPageComponent implements OnInit {
  trackingNumber: string = '';
  packageDetails: Packages | undefined;
  latitude: number = 4.0429408;
  longitude: number = 9.706203;

  constructor(private trackingService: TrackingService) {}

  ngOnInit() {
    this.getPackageDetails();
  }

  getPackageDetails() {
    this.trackingService.getPackageDetails(this.trackingNumber)
      .subscribe((result: any) => {
        this.packageDetails = result.data;
        this.latitude = this.getFromLocationLatitude();
        this.longitude = this.getFromLocationLongitude();
        this.initializeMap();
      });
  }

  getFromLocationLatitude(): number {
    return this.packageDetails?.from_location?.lat ?? 4.0429408;
  }

  getFromLocationLongitude(): number {
    return this.packageDetails?.from_location?.lng ?? 9.706203;
  }

  initializeMap() {
    const map = L.map('map').setView([this.getFromLocationLatitude(), this.getFromLocationLongitude()], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([this.getFromLocationLatitude(), this.getFromLocationLongitude()]).addTo(map);
  }
}
