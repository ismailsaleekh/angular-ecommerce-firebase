import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";


@Injectable()

export class DataService {

    private products: object[] = []

    constructor(private database: AngularFireDatabase) { }

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

}