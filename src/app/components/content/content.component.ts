import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public productsList: any[] = []
  public genresList: any[] = []
  public authorList: any[] = []
  public isFilter: boolean = false

  public filteredList: any[] = []

  public filteringText: string = ''

  constructor(private dataService: DataService,
    private cartService: CartService,
    private router: Router,
    private favsService: FavoritesService
  ) { }

  async ngOnInit(): Promise<any> {
    this.productsList = await this.dataService.fetchProducts()
    this.filterByGenre()
    this.filterByAuthor()
    this.filterByTitle()
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
    this.favsService.addToFavorites(product)
  }

  private setInFav() {
    this.productsList.forEach(item => {
      item.inFav = false
    })
  }

  private async filterByGenre() {
    this.dataService.filterByGenre.subscribe(genre => {
      if (genre && genre !== '*') {
        this.filteredList = this.productsList.filter(product => {
          return product.subject === genre
        })
        this.isFilter = true
        this.filteringText = genre
      }
      else if (genre && genre === '*') {
        this.isFilter = false
      }
    })
  }

  private filterByAuthor() {
    this.dataService.filterByAuthor.subscribe(author => {
      if (author && author !== '*') {
        this.filteredList = this.productsList.filter(product => {
          return product.creator.includes(author)
        })
        this.isFilter = true
        this.filteringText = author
      }
      else if (author && author === '*') {
        this.isFilter = false
      }
    })
  }

  private filterByTitle() {
    this.dataService.filterTitle.subscribe(title => {
      console.log(title)
      if (title) {
        this.filteredList = this.productsList.filter(product => {
          return product.title.toLowerCase().includes(title.toLowerCase())
        })
        this.isFilter = true
        this.filteringText = title
      }
    })
  }
}
