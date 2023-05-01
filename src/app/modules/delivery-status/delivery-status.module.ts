import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DeliveryStatusRoutingModule } from './delivery-status-routing.module';
import { DeliveryStatusComponent } from './components/delivery-status/delivery-status.component';
import { SharedModule } from '../shared/shared.module';
import { DeliveryStatusDetailComponent } from './components/delivery-status-detail/delivery-status-detail.component';


@NgModule({
  declarations: [DeliveryStatusComponent, DeliveryStatusDetailComponent],
  imports: [
    CommonModule,
    DeliveryStatusRoutingModule,
    RouterModule,
    SharedModule,
  ]
})
export class DeliveryStatusModule { }
