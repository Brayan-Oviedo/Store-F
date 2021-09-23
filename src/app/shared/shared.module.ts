import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CrudComponent } from './components/crud.component';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    CrudComponent
  ],
  imports: [
    MaterialModule,
    CommonModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    CrudComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {}