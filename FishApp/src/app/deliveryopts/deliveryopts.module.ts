import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliveryoptsPageRoutingModule } from './deliveryopts-routing.module';

import { DeliveryoptsPage } from './deliveryopts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliveryoptsPageRoutingModule
  ],
  declarations: [DeliveryoptsPage]
})
export class DeliveryoptsPageModule {}
