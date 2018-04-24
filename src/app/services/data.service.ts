import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { AngularFireStorage } from "angularfire2/storage";


@Injectable()

export class DataService {

  private products: object[] = []
  private genres: object[] = []
  private authors: object[] = []
  private orders: object[] = []
  private productsRef: AngularFireList<any>
  private ordersRef: AngularFireList<any>
  
  public selectedProduct: object = {}
  public viewDetailProduct: object = {}

  public filter_G = new BehaviorSubject<string>(null)
  public filterByGenre = this.filter_G.asObservable()

  public filter_A = new BehaviorSubject<string>(null)
  public filterByAuthor = this.filter_A.asObservable()

  public filter_T = new BehaviorSubject<string>(null)
  public filterTitle = this.filter_T.asObservable()


  constructor(private database: AngularFireDatabase,
              private storage: AngularFireStorage
  ) { 
    this.productsRef = this.database.list('products')
    this.fetchOrders()    
  }

  public async fetchProducts(): Promise<any> {
    if (this.products.length > 0) {
      return this.products
    } else {
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
  }

  public async fetchGenres(): Promise<any> {
    if (this.genres.length > 0) {
      return this.genres
    } else {
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
    
  }

  public async fetchAuthors(): Promise<any> {
    if (this.authors.length > 0) {
      return this.authors
    } else {
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
  }

  public async fetchOrders() {
    if (this.orders.length > 0) {
      return this.orders
    } else {
      await this.database.list('/checkout/').snapshotChanges()
      .subscribe((data: any) => {
        data.forEach(element => {
          const order = element.payload.val()
          order.key = element.key
          this.orders.push(order)
        });
      })
      return this.orders

    }
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
  
  public checkout(product) {
    this.database.list('/checkout/').push(product)
  }
}