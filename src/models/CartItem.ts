import { Product } from "./Products";

export class CartItem{
    constructor(public product: Product, public amount: number) {}
}