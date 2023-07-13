import { Component, Input, OnInit } from '@angular/core';
import { AdminService } from './admin.service';
import { Router } from '@angular/router';
import { FormService } from '../form/form.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit  {
  packages: any[] = [];
  deliveries: any[] = [];
  @Input() formContent: string | undefined ;

  constructor(private adminService: AdminService, private router: Router, public formService: FormService) {}

  ngOnInit() {
    this.fetchPackages();
    this.fetchDeliveries();
  }

  fetchPackages() {
    this.adminService.getPackages().subscribe((result: any) => {
      this.packages = result.data;
    });
  }

  fetchDeliveries() {
    this.adminService.getDeliveries().subscribe((result: any) => {
      this.deliveries = result.data;
    });
  }

  openPackageForm() {
    this.router.navigate(['/form']);
    this.formService.setFormContent('package');
  }

  openDeliveryForm() {
    this.router.navigate(['/form']);
    this.formService.setFormContent('delivery');
  }
}
