import {  NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormOrderComponent } from './form-order/form-order.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductOrderCreationUpdatingDialogComponent } from './product/product-order-creation-updating-dialog/product-order-creation-updating-dialog.component';

@NgModule({
  declarations: [
    HomeComponent,
    FormOrderComponent,
    ProductOrderCreationUpdatingDialogComponent
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
