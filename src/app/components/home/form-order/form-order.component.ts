import { Input } from '@angular/core';
import { ViewChild, ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { of } from 'rxjs';
import { Client } from 'src/app/model/client/Client.model';
import { OrderSaleRequest } from 'src/app/model/order/OrderSaleRequest.model';
import { ProductRequest } from 'src/app/model/product/ProductRequest.model';
import { OrderService } from 'src/app/service/order.service';
import { OrderSeparateRequest } from '../../../model/order/OrderSeparateRequest.model';
import { ProductOrderCreationUpdatingDialogComponent } from '../product/product-order-creation-updating-dialog/product-order-creation-updating-dialog.component';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormOrderComponent implements OnInit {

  @Input() products = [];

  title = 'Products';
  order = new OrderSaleRequest();
  list = of(this.order.products);
  client: Client = new Client();
  formClient!: FormGroup;
  formOrder!: FormGroup;
  orderSeparate: OrderSeparateRequest = new OrderSeparateRequest();


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
    this.formClient.patchValue(this.client);

    this.formOrder = this.formBuilder.group({
      bussinessDays: [''],
      payReceived: ['']
    })
    this.formOrder.patchValue(this.client);
    
  }

  create(): void {
    this.dialog.open(ProductOrderCreationUpdatingDialogComponent)
      .afterClosed()
      .subscribe(product => {
        if (product) {
          this.order.products.push(product);
          this.list = of(this.order.products);
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

    this.dialog.open(ProductOrderCreationUpdatingDialogComponent, { data: product })
      .afterClosed()
      .subscribe(product => {
        if (product) {
          var i = this.order.products.indexOf(product);

          if (i !== -1) {
            this.order.products.splice(i, 1, product);
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
    this.orderService.createOrderSale(this.order)
    .subscribe(
      result => {
        console.log('result: ' + result);
      },fail => {
        console.log('exception: ' + fail.error.mssg);
        console.log('exception: ' + fail.error);
      }
    );
  }

  cancelOrder() {
    this.orderService.canceleOrderSale(1)
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
