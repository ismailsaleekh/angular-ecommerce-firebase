import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cartList: object[] = []
  constructor(private cartService: CartService) { }

  async ngOnInit(): Promise<any> {
    this.cartList = this.cartService.list
  }
  
  public increase(product: any): void {
    product.quantity += 1
    this.setTotalPrice()
  }
  
  public decrease(product: any): void {
    product.quantity -= 1
    this.setTotalPrice()
  }

  public remove(product: any): void {
    this.cartList = this.cartList.filter((item: any): boolean => {
      return item.key !== product.key
    })
  }

  private setTotalPrice() {
    this.cartList.forEach((item: any): void => {
      item.totalPrice = item.quantity * item.price
    })
  }
}
