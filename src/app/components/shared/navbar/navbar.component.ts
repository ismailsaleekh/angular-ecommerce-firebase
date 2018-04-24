import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { CartService } from '../../../services/cart.service';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isAuth: boolean = false
  public badge: number = 0

  public search: string = ''

  constructor(private usersService: UserService,
              private cartService: CartService,
              private dataService: DataService
) { }

  ngOnInit() {
    this.usersService.isAuth.subscribe(data => {
      this.isAuth = data
    })
    this.cartService.cartLength.subscribe(data => {
      this.badge = data
    })
  }

  logout() {
    this.usersService.logout()
  }

  filter() {
    if (this.search.length > 0) {
      console.log('searching', this.search)
      this.dataService.filter_T.next(this.search)
    }
  }
}
