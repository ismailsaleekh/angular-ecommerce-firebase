import { Component, OnInit } from '@angular/core';
import * as feather  from 'feather-icons';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    feather.replace();
  }

}
