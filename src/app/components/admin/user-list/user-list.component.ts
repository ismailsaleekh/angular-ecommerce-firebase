import { Component, OnInit } from '@angular/core';



declare interface TableData {
  headerRow : string[];
  dataRows: string[][];
}

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public TableData : TableData;

  constructor() { }

  ngOnInit() {
    this.TableData = {
      headerRow: ['ID', 'Name', 'Username', 'Email', 'Address'],
      dataRows: [
        ['1', '', '', '', '', ''],
        ['2', '', '', '', '', '']
      ]
    };


  }

}
