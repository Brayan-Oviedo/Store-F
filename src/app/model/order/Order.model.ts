import { Client } from "../client/Client.model";
import { ProductRequest } from "../product/ProductRequest.model";


export class Order {
    id: number = 0;
    client: Client = new Client();
    products = new Array<ProductRequest>();
    totalCost: number = 0;
}