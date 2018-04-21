import { Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons'

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    feather.replace();
  }

}
