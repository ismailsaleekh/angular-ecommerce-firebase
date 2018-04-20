import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public productsList: any[] = []
  public genresList: any[] = []

  public filteringGenre: string = ''

  constructor(private dataService: DataService,
              private cartService: CartService,
              private router: Router
  ) { }

  async ngOnInit(): Promise<any> {
    this.productsList = await this.dataService.fetchProducts()
    this.genresList = await this.dataService.fetchGenres()
    this.setInFav()
  }

  public async addToCart(product) {
    await this.cartService.addToCart(product)  
  }

  public viewDetail(product) {
    this.dataService.viewDetailProduct = product
    this.router.navigate(['product-details'])    
  }

  public async addToFavorites(product) {
    product.inFav = true
  }

  private setInFav() {
    this.productsList.forEach(item => {
      item.inFav = false
    })
  }

  private filterByGenre() {
    this.dataService.filterByGenre.subscribe(genre => {
      if (genre) {
        this.productsList = this.productsList.filter(product => {
          return product.subject === genre
        })
      }
    })
  }

  private filterByAuthor() {
    this.dataService.filterByAuthor.subscribe(author => {
      if (author) {
        this.productsList = this.productsList.filter(product => {
          return product.creator === author
        })
      }
    })
  }
}
