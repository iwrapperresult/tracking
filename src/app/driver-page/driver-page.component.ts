import { Component, Input } from '@angular/core';
import { DriverService } from './driver-page.service';
import { DriverDto } from './driver-page.dto';

@Component({
  selector: 'app-driver-page',
  templateUrl: './driver-page.component.html',
  styleUrls: ['./driver-page.component.sass']
})
export class DriverPageComponent {
  trackingNumber: string = '';
  driverDetails!: DriverDto;
  @Input() latitude!: number;
  @Input() longitude!: number;

  constructor(private driverService: DriverService) {}

  ngOnInit() {}

  getDriverDetails() {
    this.driverService.getDriverDetails(this.trackingNumber)
      .subscribe((result: any) => {
        this.driverDetails = result.data;
      });
  }

  getToLocationLatitude(): number {
    return this.driverDetails?.location?.lat.valueOf() ?? this.latitude;
  }

  getToLocationLongitude(): number {
    return this.driverDetails?.location?.lng.valueOf() ?? this.longitude;
  }
}
