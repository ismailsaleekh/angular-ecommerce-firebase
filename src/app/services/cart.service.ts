import { Injectable } from "@angular/core";


@Injectable()

export class CartService{

  private cartList: any[] = []
  
  constructor() {}

  addToCart(product: any): void {
    product.quantity = product.quantity || 1

    const index = this.cartList.findIndex((item: any): boolean => {
      return item.key === product.key
    })

    if(index === -1) {
      this.cartList.push(product)
    } else {
      this.cartList[index].quantity += 1
    }

    console.log(this.cartList);
  }
}