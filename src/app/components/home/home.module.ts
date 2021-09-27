import {  NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormOrderComponent } from './form-order/form-order.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductUpdateDialogComponent } from './product/product-order-creation-updating-dialog/product-update.component';
import { FormOrderSeparateComponent } from './form-order-separate/form-order-separate.component';

@NgModule({
  declarations: [
    HomeComponent,
    FormOrderComponent,
    ProductUpdateDialogComponent,
    FormOrderSeparateComponent
  ],
  imports: [
    MaterialModule,
    SharedModule,
    HomeRoutingModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
