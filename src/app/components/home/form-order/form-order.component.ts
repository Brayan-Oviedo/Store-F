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
import { Message } from 'src/app/shared/utils/Message';
import { ProductUpdateDialogComponent } from '../product/product-order-creation-updating-dialog/product-update.component';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormOrderComponent implements OnInit {

  products = [];

  title = 'Productos';
  order = new OrderSaleRequest();
  list = of(this.order.products);
  formClient!: FormGroup;



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
    this.order.client = this.formClient.value;
    this.orderService.createOrderSale(this.order)
    .subscribe(
      result => {
        this.order.totalCost = result.totalCost;
        this.order.id = result.id
        Message.throwMessageSuccess('', '');
      },fail => {
        Message.throwMessageError('', fail.error.mssg);        
      }
    );
  }

  cancelOrder() {
    if(this.order.id > 0) {
      this.orderService.cancelOrderSale(this.order.id)
      .subscribe(
        result => {
          this.order.totalCost = 0;
          this.order.products = [];
          this.list = of([]);
          this.formClient.patchValue(new Client())
          Message.throwMessageSuccess('', 'Orden cancelada');
        },fail => {
          Message.throwMessageError('', fail.error.mssg);
        }
      );
    }
  }
}
