import { NgModule } from '@angular/core';

import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
 /* imports: [
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatButtonModule
  ],*/
  exports: [
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class MaterialModule { }