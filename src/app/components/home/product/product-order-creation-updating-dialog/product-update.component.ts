import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { ProductRequest } from 'src/app/model/product/ProductRequest.model';

@Component({
  selector: 'app-product-update-dialog',
  templateUrl: './product-update-dialog.component.html',
  styleUrls: ['./product-update-dialog.component.css']
})
export class ProductUpdateDialogComponent implements OnInit {

  title: string = '';
  product: ProductRequest = new ProductRequest();


  constructor(@Inject (MAT_DIALOG_DATA) data: ProductRequest, private dialog: MatDialog) { 
    this.title = data ? 'Editar producto' : 'Agregar producto';
    this.product = data ? data : this.product;
  }

  ngOnInit(): void {
  }

  add() {
    this.dialog.closeAll();
  }

}
