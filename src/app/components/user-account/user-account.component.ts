import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons'
import { Router } from '@angular/router';
import { FavoritesService } from '../../services/favorites.service';
import { CartService } from '../../services/cart.service';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of'

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  public user: any = {}
  public favList: any[] = []
  public orderList: any[] = []
  public cartLength: number = 0

  constructor(private router: Router,
              private userService: UserService,
              private favService: FavoritesService,
              private cartService: CartService,
              private dataService: DataService
  ) { }

  async ngOnInit() {
    feather.replace();

    this.userService.isAuth.subscribe(data => {
      if (data) {
        this.user = this.userService.user
      } else {
        this.router.navigate(['login'])
      }
    })

    this.filterProducts(await this.dataService.fetchOrders())

    this.favList = this.favService.list

    this.cartService.cartLength.subscribe(data => {
      this.cartLength = data
    })
  }

  removeFromFavs(product) {
    this.favList = this.favList.filter(item => {
      return item.key !== product.key
    })
    this.favService.addFavsToStorage(this.favList)
  }

  logout() {
    this.userService.logout()
  }

  filterProducts(list) {
    list.forEach(element => {
      const keys = Object.keys(element).filter(item => {
        return item.includes('product')
      })
      keys.forEach(k => {
        this.orderList.push(element[k])
      })
      console.log(this.orderList)
    });
  }

}
