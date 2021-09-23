import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { ProductRequest } from 'src/app/model/product/ProductRequest.model';

@Component({
  selector: 'app-product-order-creation-updating-dialog',
  templateUrl: './product-order-creation-updating-dialog.component.html',
  styleUrls: ['./product-order-creation-updating-dialog.component.css']
})
export class ProductOrderCreationUpdatingDialogComponent implements OnInit {

  title: string = "";
  product: ProductRequest = new ProductRequest();

  constructor(@Inject (MAT_DIALOG_DATA) data: ProductRequest, private dialog: MatDialog) { 
    this.title = data ? 'Update producto' : 'Agregar producto';
    this.product = data ? data : this.product;
  }

  ngOnInit(): void {
  }

  add() {
    this.dialog.closeAll();
  }

}
