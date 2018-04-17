import { Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons'



@Component({
  selector: 'admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    feather.replace();
  }

}
