import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent implements OnInit {

  public genre: object = {}
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  public submitForm() {
    this.dataService.addGenre(this.genre)
  }
}
