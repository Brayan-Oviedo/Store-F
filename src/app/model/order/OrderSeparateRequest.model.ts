import { Order } from "./Order.model";


export class OrderSeparateRequest extends Order {

    bussinessDays?: number;
    payReceived?: number; 
}