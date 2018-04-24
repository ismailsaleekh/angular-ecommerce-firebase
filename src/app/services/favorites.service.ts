import { Injectable } from "@angular/core";


@Injectable()

export class FavoritesService {

  public favsList: any[] = []

  constructor() { }

  public addToFavorites(product) {
    const index = this.favsList.findIndex(item => {
      return item.key === product.key
    })

    if (index === -1) {
      this.favsList.push(product)
      this.addFavsToStorage(this.favsList)
    } else {
      return
    }
  }

  public addFavsToStorage(list) {
    localStorage.setItem('favList', JSON.stringify(list))
  }

  get list() {
    const list = JSON.parse(localStorage.getItem('favList'))
    if (!list) {
      return []
    } else {
      return list
    }
  }
}