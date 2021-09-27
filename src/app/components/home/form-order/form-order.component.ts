import { Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { Client } from 'src/app/model/client/Client.model';
import { OrderSaleRequest } from 'src/app/model/order/OrderSaleRequest.model';
import { ProductRequest } from 'src/app/model/product/ProductRequest.model';
import { OrderService } from 'src/app/service/order.service';
import { ProductListComponent } from 'src/app/shared/components/product-list/product-list.component';
import { OrderSeparateRequest } from '../../../model/order/OrderSeparateRequest.model';
import { ProductUpdateDialogComponent } from '../product/product-order-creation-updating-dialog/product-update.component';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormOrderComponent implements OnInit {

  products = [];

  title = 'Products';
  order = new OrderSaleRequest();
  list = of(this.order.products);
  formClient!: FormGroup;
  client: Client = new Client();



  constructor(
    private dialog: MatDialog,
    private orderService: OrderService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.formClient = this.formBuilder.group({
      name: ['', Validators.minLength(3)],
      identification: [''],
      phoneNumber: ['', Validators.minLength(7)]
    })
    
  }

  create(): void {
    this.dialog.open(ProductListComponent)
      .afterClosed()
      .subscribe(product => {
        if (product) {
          let productReq = new ProductRequest(product.reference)
          this.update(productReq)
        }
      });
  }

  read(article: any): void {
    /*this.dialog.open(ReadDetailDialogComponent, {
      data: {
        title: 'Article Details',
        object: this.articleService.read(article.barcode)
      }
    });*/
  }

  update(product: ProductRequest): void {

    this.dialog.open(ProductUpdateDialogComponent, { data: product })
      .afterClosed()
      .subscribe(product => {
        if (product) {
          var i = this.order.products.indexOf(product);

          if (i !== -1) {
            this.order.products.splice(i, 1, product);
          }else {
            this.order.products.push(product)
          }

          this.list = of(this.order.products);
        }
      });
  }

  remove(product: ProductRequest) {
    var i = this.order.products.indexOf(product);

    if (i !== -1) {
      this.order.products.splice(i, 1);
    }

    this.list = of(this.order.products);
  }

  setOrder() {
    this.formClient.patchValue(this.client);
    this.order.client = new Client('Fan', '123', 123);
    console.log('client: ' + this.client.name)
    this.orderService.createOrderSale(this.order)
    .subscribe(
      result => {
        this.order.totalCost = result.totalCost
        console.log('result: ' + result);
      },fail => {
        console.log('exception: ' + fail.error.mssg);
        console.log('exception: ' + fail.error);
      }
    );
  }

  cancelOrder() {
    this.orderService.cancelOrderSale(1)
    .subscribe(
      result => {
        console.log('result: ' + result);
      },fail => {
        console.log('exception: ' + fail.error.mssg);
        console.log('exception: ' + fail.error);
      }
    );
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
