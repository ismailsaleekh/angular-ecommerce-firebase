import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {

  public author: any = {}

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  public submitForm() {
    this.dataService.addAuthor(this.author)
  }

}
