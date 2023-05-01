import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryStatusComponent} from './components/inventory-status/inventory-status.component'

const routes: Routes = [
  {path: 'inventory-status',component: InventoryStatusComponent},
  //{path: 'delivery-status/:status',component: DeliveryStatusDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
