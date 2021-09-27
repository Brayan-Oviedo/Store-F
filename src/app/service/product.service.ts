import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private URL_BASE = environment.URL_BASE + 'product';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getAllProducts(): Observable<any> {
    return this.http.get<any>(this.URL_BASE + '/getAllProducts', this.httpOptions);
  }

}
