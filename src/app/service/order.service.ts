import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OrderSaleRequest } from '../model/order/OrderSaleRequest.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private URL_BASE = environment.URL_BASE + 'order';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  createOrderSale(order: OrderSaleRequest): Observable<any> {
    return this.http.post<any>(this.URL_BASE + '/createOrderSale', order, this.httpOptions);
  }

  cancelOrderSale(id: number): Observable<any> {
    return this.http.put<any>(this.URL_BASE + '/cancelOrder/' + id.toString(), this.httpOptions);
  }

}
