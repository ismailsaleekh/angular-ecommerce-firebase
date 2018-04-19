import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'admin-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public productsList: object[] = []

  constructor(private dataService: DataService,
    private router: Router
  ) { }

  async ngOnInit() {
    await this.fetchProducts()
  }

  goToEdit(product) {
    this.dataService.selectedProduct = product
    this.router.navigate(['admin/add-product'], { queryParams: { isEdit: true } })
  }

  async setRec(product) {
    product.isRec = true
    this.dataService.updateProduct(product.key, product)
  }

  private async fetchProducts() {
    this.productsList = await this.dataService.fetchProducts()
  }

  async delete(product) {
    await this.dataService.deleteProduct(product.key)
    await this.fetchProducts()
  }

}
