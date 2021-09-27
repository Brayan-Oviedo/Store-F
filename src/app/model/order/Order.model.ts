import { Client } from "../client/Client.model";
import { ProductRequest } from "../product/ProductRequest.model";


export class Order {
    client: Client = new Client();
    products = new Array<ProductRequest>();
    totalCost: number = 0;
}