import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public product: any = {}
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.product = this.dataService.viewDetailProduct
  }

}
