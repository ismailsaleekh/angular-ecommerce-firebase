import { DataService } from './data.service';
import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()

export class CartService{

  private cartList: any[] = []
  private badge = new BehaviorSubject<number>(0)
  public cartLength = this.badge.asObservable()

  
  constructor(private dataService: DataService) {
    this.list
  }

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
    this.badge.next(this.cartList.length)
  }

  addToStorage(list: object[]): void {
    localStorage.setItem('cartListIds', JSON.stringify(list))
    this.badge.next(list.length)
  }

  get list() {
    const list = JSON.parse(localStorage.getItem('cartListIds'))
    if (!list) {
      return []
    } else {
      this.badge.next(list.length)
      return list
    }
  }
}