import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { Client } from 'src/app/model/client/Client.model';
import { OrderSeparateRequest } from 'src/app/model/order/OrderSeparateRequest.model';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-form-order-separate',
  templateUrl: './form-order-separate.component.html',
  styleUrls: ['./form-order-separate.component.css']
})
export class FormOrderSeparateComponent implements OnInit {

  title = '';
  formOrder!: FormGroup;
  orderSeparate: OrderSeparateRequest = new OrderSeparateRequest();
  client: Client = new Client();
  list = of(this.orderSeparate.products);

  constructor(
    private dialog: MatDialog,
    private orderService: OrderService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.formOrder = this.formBuilder.group({
      bussinessDays: [''],
      payReceived: ['']
    })

    this.formOrder.patchValue(this.client);
  }

}
