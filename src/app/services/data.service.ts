import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { AngularFireStorage } from "angularfire2/storage";


@Injectable()

export class DataService {

  private products: object[] = []
  private genres: object[] = []
  private authors: object[] = []
  private productsRef: AngularFireList<any>
  
  public selectedProduct: object = {}
  public viewDetailProduct: object = {}

  constructor(private database: AngularFireDatabase,
              private storage: AngularFireStorage
  ) { 
    this.productsRef = this.database.list('products')    
  }

  public async fetchProducts(): Promise<any> {
    await this.database.list('/products/').snapshotChanges()
      .subscribe((data: any): void => {
        data.forEach(element => {
          const product = element.payload.val()
          product.key = element.key
          this.products.push(product)
        });
      })
    return this.products
  }

  public async fetchGenres(): Promise<any> {
    await this.database.list('/genres/').snapshotChanges()
      .subscribe((data: any): void => {
        data.forEach(element => {
          const genre = element.payload.val()
          genre.key = element.key
          this.genres.push(genre)
        });
      })

    return this.genres
  }

  public async fetchAuthors(): Promise<any> {
    await this.database.list('/authors/').snapshotChanges()
      .subscribe((data:any): void => {
        data.forEach(element => {
          const author = element.payload.val()
          author.key = element.key
          this.authors.push(author)
        });
      })
    
    return this.authors
  }

  public async updateProduct(key: string, product: object) {
    await this.productsRef.update(key, product)
  }

  public async deleteProduct(key: string) {
    await this.productsRef.remove(key)
  }

  public addProduct(product) {
    this.storage.upload(`${product.title}_Cover`, product.image).then((data: any) => {
      product.coverUrl = data.metadata.downloadURLs[0]
      console.log(product)
    }).then(() => {
      this.database.list('/products/').push(product)
    })
  }

  public addAuthor(author) {
    this.database.list('/authors/').push(author)
  }

  public addGenre(genre) {
    this.database.list('/genres/').push(genre)
  }
}