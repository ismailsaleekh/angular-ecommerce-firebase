import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isAuth: boolean = false

  constructor(private usersService: UserService) { }

  ngOnInit() {
    this.usersService.isAuth.subscribe(data => {
      this.isAuth = data
    })
  }

  logout() {
    this.usersService.logout()
  }
}
