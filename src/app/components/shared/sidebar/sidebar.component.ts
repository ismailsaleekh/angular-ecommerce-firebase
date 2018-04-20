import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public genresList: object[] = []
  public authorsList: object[] = []

  constructor(private dataService: DataService) { }

  async ngOnInit() {
    this.genresList = await this.dataService.fetchGenres()
    this.authorsList = await this.dataService.fetchAuthors()
  }

  filterByGenre(genre: string) {
    this.dataService.filter_G.next(genre)
  }

  filterByAuthor(author: string) {
    this.dataService.filter_A.next(author)
  }
}
