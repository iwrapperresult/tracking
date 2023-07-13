import { Component,AfterViewInit, OnInit, Input } from '@angular/core';
import * as L from 'leaflet';
import { Packages } from '../tracking-page/tracking-page.dto';
import { DriverDto } from '../driver-page/driver-page.dto';

@Component({
  selector: 'app-location-track',
  templateUrl: './location-track.component.html',
  styleUrls: ['./location-track.component.sass']
})
export class LocationTrackComponent implements AfterViewInit {
  @Input() latitude?: number;
  @Input() longitude?: number;
  @Input() packageDetails?: Packages;
  @Input() driverDetails!: DriverDto;
  constructor() {}

  ngAfterViewInit() {
    if (this.latitude && this.longitude) {
      this.initializeMap(this.latitude, this.longitude);
    }
  }



  initializeMap(latitude: number, longitude: number) {
    const map = L.map('map').setView([latitude, longitude], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([latitude, longitude]).addTo(map);
  }
}
