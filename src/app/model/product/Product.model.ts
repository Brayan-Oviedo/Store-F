import { ProductRequest } from "./ProductRequest.model";

export class Product extends ProductRequest {

    category?: string;
    originalCost?: number;
    costSale?: number;
    isSeparated?: boolean;

}