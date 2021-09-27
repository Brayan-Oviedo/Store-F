import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { Product } from 'src/app/model/product/Product.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  title = 'Productos';
  icon = 'add'
  list = of([])
  product: Product = new Product();


  constructor(private service: ProductService, private dialog: MatDialog) { 
    
  }

  ngOnInit(): void {
    this.list = this.service.getAllProducts();
  }

  addProduct(product: Product) {
    this.product = product;
    this.dialog.closeAll();
  }

}
