import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CostomerListComponent } from './components/costomer-list/costomer-list.component';
import { CostomerDetailComponent } from './components/costomer-detail/costomer-detail.component'

const routes: Routes = [
  {path: 'Customers',  component: CostomerListComponent},
  {path: 'Customers/:id',  component: CostomerDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
