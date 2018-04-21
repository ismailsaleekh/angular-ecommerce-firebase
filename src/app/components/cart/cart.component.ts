import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private modalRef: BsModalRef;

  public cartList: object[] = []
  constructor(
    private cartService: CartService,
    private modal: BsModalService
  ) { }

  async ngOnInit(): Promise<any> {
    console.log(this.cartService.list)
    this.cartList = this.cartService.list
  }

  public increase(product: any): void {
    product.quantity += 1
    this.cartService.addToStorage(this.cartList)
    this.setTotalPrice()
  }

  public decrease(product: any): void {
    product.quantity -= 1
    this.cartService.addToStorage(this.cartList)
    this.setTotalPrice()
  }

  public remove(product: any): void {
    this.cartList = this.cartList.filter((item: any): boolean => {
      return item.key !== product.key
    })
    this.cartService.addToStorage(this.cartList)
  }

  private setTotalPrice() {
    this.cartList.forEach((item: any): void => {
      item.totalPrice = item.quantity * item.price
    })
  }

  public showModal(template) {
    this.modalRef = this.modal.show(template)
  }
  
}
