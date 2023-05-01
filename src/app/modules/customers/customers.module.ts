import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CostomerListComponent } from './components/costomer-list/costomer-list.component';
import { SharedModule } from '../shared/shared.module';
import { CostomerDetailComponent } from './components/costomer-detail/costomer-detail.component';


@NgModule({
  declarations: [CostomerListComponent, CostomerDetailComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule
  ]
})
export class CustomersModule { }
