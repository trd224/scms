import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliveryStatusComponent } from './components/delivery-status/delivery-status.component';
import { DeliveryStatusDetailComponent } from './components/delivery-status-detail/delivery-status-detail.component';

const routes: Routes = [
  {path: 'delivery-status',component: DeliveryStatusComponent},
  {path: 'delivery-status/:status',component: DeliveryStatusDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryStatusRoutingModule { }
