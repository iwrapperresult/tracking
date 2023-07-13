import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import axios from 'axios';
import { DriverDto } from './driver-page.dto';
import { DriverService } from './driver-page.service';

@Component({
  selector: 'app-driver-page',
  templateUrl: './driver-page.component.html',
  styleUrls: ['./driver-page.component.sass']
})
export class DriverPageComponent implements OnInit{
  trackingNumber: string = '';
  driverDetails!: DriverDto;
  latitude: number = 4.0429408;
  longitude: number = 9.706203;

  constructor(private driverService: DriverService) {}

  ngOnInit() {
    this.getDriverDetails();
  }

  getDriverDetails() {
    this.driverService.getDriverDetails(this.trackingNumber)
      .subscribe((result: any) => {
        this.driverDetails = result.data;
        this.latitude = this.getToLocationLatitude();
        this.longitude = this.getToLocationLongitude();
        this.initializeMap();
      });
  }

  getToLocationLatitude(): number {
    return this.driverDetails?.location?.lat.valueOf() ?? 4.0429408;
  }

  getToLocationLongitude(): number {
    return this.driverDetails?.location?.lng.valueOf() ?? 9.706203;
  }

  initializeMap() {
    const map = L.map('map').setView([this.latitude, this.longitude], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([this.latitude, this.longitude]).addTo(map);
  }

  updateStatus(status: string) {

    this.driverService.updateStatus(this.trackingNumber, status)
      .then(response => {
        const updatedDelivery = response.data.data;
        alert('Status updated');
        location.reload()
      })
      .catch(error => {
        alert(error.message);
      });
  }
}
