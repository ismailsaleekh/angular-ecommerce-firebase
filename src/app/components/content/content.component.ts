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
  public genresList: any[] = []

  constructor(private dataService: DataService,
              private cartService: CartService
  ) { }

  async ngOnInit(): Promise<any> {
    this.productsList = await this.dataService.fetchProducts()
    this.genresList = await this.dataService.fetchGenres()
    this.setInFav()
  }

  public async addToCart(product) {
    await this.cartService.addToCart(product)  
  }

  public async addToFavorites(product) {
    product.inFav = true
  }

  private setInFav() {
    this.productsList.forEach(item => {
      item.inFav = false
    })
  }
}
