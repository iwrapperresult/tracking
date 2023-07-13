import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackingPageComponent } from './tracking-page/tracking-page.component';
import { DriverPageComponent } from './driver-page/driver-page.component';

const routes: Routes = [
  { path: 'tracking', component: TrackingPageComponent },
  { path: 'driver', component: DriverPageComponent },
  { path: '', redirectTo: '/tracking', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
