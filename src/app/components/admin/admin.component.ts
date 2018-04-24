import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private dataService: DataService) {
    dataService.fetchOrders()
   }

  ngOnInit() {
  }

  isCollapsed: boolean = false;
 
  collapsed(event: any): void {
    console.log(event);
  }
 
  expanded(event: any): void {
    console.log(event);
  }
}
