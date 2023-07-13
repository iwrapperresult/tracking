import { Component, Input, OnInit } from '@angular/core';
import { TrackingService } from './tracking-page.service';
import { Packages } from './tracking-page.dto';

@Component({
  selector: 'app-tracking-page',
  templateUrl: './tracking-page.component.html',
  styleUrls: ['./tracking-page.component.sass']
})
export class TrackingPageComponent implements OnInit {
  trackingNumber: string  = '';
  packageDetails!: Packages;
  @Input() latitude!: number;
  @Input() longitude!: number;


  constructor(private trackingService: TrackingService) {}

  ngOnInit() {}


  getPackageDetails() {
    this.trackingService.getPackageDetails(this.trackingNumber)
      .subscribe((result: any) => {
        this.packageDetails = result.data;
      });
  }

  getFromLocationLatitude(): number {
    return this.packageDetails?.from_location?.lat ?? this.latitude;
  }

  getFromLocationLongitude(): number {
    return this.packageDetails?.from_location?.lng ?? this.longitude;
  }


}
