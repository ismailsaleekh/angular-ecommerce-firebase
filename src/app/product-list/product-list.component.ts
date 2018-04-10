import { Component, OnInit } from '@angular/core';


declare interface TableData {
  headerRow : string[];
  dataRows: string[][];
}

@Component({
  selector: 'admin-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  public TableData : TableData;

  constructor() { }

  ngOnInit() {
    this.TableData = {
      headerRow: ['ID', 'Creator', 'Title', 'Price', 'Date', 'Subject', 'Publisher', 'Type', 'Format', 'Identifier', 'Source', 'Language', 'Relation', 'Coverage', 'Rights'],
      dataRows: [
        ['1', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['2', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ]
    };
  }

}
