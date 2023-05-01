import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryStatusComponent } from './components/inventory-status/inventory-status.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [InventoryStatusComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    SharedModule
  ]
})
export class InventoryModule { }
