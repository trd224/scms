import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './modules/shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'delivery-status', pathMatch: 'full'},
  {path: '', loadChildren: () => import('./modules/delivery-status/delivery-status.module').then(m => m.DeliveryStatusModule)},
  {path: '', loadChildren: () => import('./modules/inventory/inventory.module').then(m => m.InventoryModule)},
  {path: '', loadChildren: () => import('./modules/shipment/shipment.module').then(m => m.ShipmentModule)},
  {path: '', loadChildren: () => import('./modules/customers/customers.module').then(m => m.CustomersModule)},
  {path: 'page-not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'page-not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
