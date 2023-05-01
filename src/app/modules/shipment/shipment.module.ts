import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ShipmentRoutingModule } from './shipment-routing.module';
import { ShipmentComponent } from './components/shipment/shipment.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ShipmentComponent],
  imports: [
    CommonModule,
    ShipmentRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class ShipmentModule { }
