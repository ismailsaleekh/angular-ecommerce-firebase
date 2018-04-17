import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public productsList: object[] = []

  constructor(private dataService: DataService) { }

  async ngOnInit(): Promise<any> {
    this.productsList = await this.dataService.fetchProducts()
    console.log(this.productsList)
  }

}
