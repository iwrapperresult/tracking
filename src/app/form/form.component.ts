import { Component, OnInit } from '@angular/core';
import { FormService } from './form.service';
import { AdminService } from '../admin/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  formContent: string | null = null;
  packages: any[] = [];
  selectedPackage: string | null = null;
  addressToPackage: string = '';
  pickupHours: string | null = null;
  fromName: string | null = null;
  fromAddress: string | null = null;
  toName: string | null = null;
  toAddress: string | null = null;
  description: string | null = null;
  weight: string | null = null;
  width: string | null = null;
  height: string | null = null;
  depth: string | null = null;


  constructor(private formService: FormService, private adminService: AdminService, private router: Router) {}

  ngOnInit() {
    this.fetchPackages();
    this.formService.formContent$.subscribe(content => {
      this.formContent = content;
    });
  }

  fetchPackages() {
    this.adminService.getPackages().subscribe((result: any) => {
      this.packages = result.data;

      if (this.selectedPackage) {
        const selectedPackage = this.packages.find((pkg: any) => pkg._id === this.selectedPackage);
        if (selectedPackage && selectedPackage.to_address) {
          this.addressToPackage = selectedPackage.to_address;
        } else {
          this.addressToPackage = '';
        }
      } else {
        this.addressToPackage = '';
      }
    });
  }

  onPackageSelectionChange(packageId: string) {
    const selectedPackage = this.packages.find((pkg: any) => pkg._id === packageId);
    this.addressToPackage = selectedPackage ? selectedPackage.to_address : '';
  }


  submitFormPackage(){
    const inputs = {
      description: this.description,
        weight: this.weight,
        width: this.width,
        height: this.height,
        depth: this.depth,
        from_name: this.fromName,
        from_address: this.fromAddress,
        to_name: this.toName,
        to_address: this.toAddress,
    };
    this.formService.createPackage(inputs)
    .subscribe((response) => {
      if(response.code === 200){
        alert(response.message);
      }
      this.router.navigate(['/admin']);
    },
    (error) => {
      alert(error.message);
    }
    );
  }

  submitForm() {
    const formData = {
      package_id: this.selectedPackage,
      pickup_time: this.pickupHours,
      to_address: this.addressToPackage
    };

    this.formService.createDelivery(formData)
      .subscribe(
        (response) => {
          if(response.code === 200) {
            alert(response.message);
          }
          this.router.navigate(['/admin']);
        },
        (error) => {
          alert(error.message);
        }
      );
  }
}
