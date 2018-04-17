import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public productsList: any[] = []

  constructor(private dataService: DataService,
              private cartService: CartService
  ) { }

  async ngOnInit(): Promise<any> {
    this.productsList = await this.dataService.fetchProducts()
    this.productsList.forEach(item => {
      item.inFav = false
    })
  }

  public async addToCart(product) {
    await this.cartService.addToCart(product)  
  }

  public async addToFavorites(product) {
    product.inFav = true
  }

}
