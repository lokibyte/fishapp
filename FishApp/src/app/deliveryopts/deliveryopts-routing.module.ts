import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveryoptsPage } from './deliveryopts.page';

const routes: Routes = [
  {
    path: '',
    component: DeliveryoptsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryoptsPageRoutingModule {}
