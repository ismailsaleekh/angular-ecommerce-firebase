import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public product: any = {}
  
  constructor(private dataService: DataService,
              private cartService: CartService
) { }

  ngOnInit() {
    this.product = this.dataService.viewDetailProduct
  }

  addToCart(product) {
    this.cartService.addToCart(product)
  }

}
