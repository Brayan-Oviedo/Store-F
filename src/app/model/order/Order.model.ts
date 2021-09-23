import { Client } from "../client/Client.model";
import { Product } from "../product/Product.model";
import { ProductRequest } from "../product/ProductRequest.model";


export class Order {
    client?: Client;
    products = new Array<ProductRequest>();
}