import { DataService } from './data.service';
import { Injectable } from "@angular/core";


@Injectable()

export class CartService{

  private cartList: any[] = []
  
  constructor(private dataService: DataService) {}

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
    this.addToStorage(this.cartList)
  }

  addToStorage(list: object[]): void {
    localStorage.setItem('cartListIds', JSON.stringify(list))
  }

  get list() {
    return JSON.parse(localStorage.getItem('cartListIds'))
  }
}