import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private modalRef: BsModalRef;
  public user: any = {}
  public cartList: any[] = []
  public totalSum: number = 0
  
  constructor(
    private cartService: CartService,
    private modal: BsModalService,
    private dataService: DataService,
    private router: Router,
    private userService: UserService
  ) { 
    this.user = this.userService.user
  }

  async ngOnInit(): Promise<any> {
    this.cartList = this.cartService.list
    this.setTotalPrice()
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
      this.totalSum += item.totalPrice
    })
  }

  public showModal(template) {
    if (!this.user.email) {
      this.router.navigate(['/login'])
    }
    this.modalRef = this.modal.show(template)
  }

  public viewDetails(product) {
    this.dataService.viewDetailProduct = product
    this.router.navigateByUrl('/product-details')
  }

  public checkout() {
    let checkout: any = {}
    this.cartList.forEach((item, i) => {
      checkout[`product${i + 1}`] = item
    })
    checkout.user_name = this.user.name
    checkout.user_email = this.user.email
    checkout.user_phone = this.user.phoneNumber
    checkout.user_address = this.user.address
    checkout.isDelivered = false

    this.dataService.checkout(checkout)
  }
  
}
