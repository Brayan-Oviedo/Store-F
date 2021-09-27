import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrudComponent } from './components/crud/crud.component';
import { ProductListComponent } from './components/product-list/product-list.component';

import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    CrudComponent,
    ProductListComponent
  ],
  imports: [
    MaterialModule,
    CommonModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    CrudComponent,
    ProductListComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {}