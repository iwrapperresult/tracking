import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackingPageComponent } from './tracking-page/tracking-page.component';
import { DriverPageComponent } from './driver-page/driver-page.component';
import { AdminComponent } from './admin/admin.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'form', component: FormComponent },
  { path: 'tracking', component: TrackingPageComponent },
  { path: 'driver', component: DriverPageComponent },
  { path: '', redirectTo: '/tracking', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
