import { Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  public product: any = {}
  public cover: File
  public isEdit: boolean = false
  
  constructor(private acRt: ActivatedRoute,
              private dataService: DataService
  ) { }

  ngOnInit() {
    feather.replace();
    this.acRt.queryParams.filter(param => param.isEdit).subscribe((data: any) => {
      this.isEdit = data.isEdit    
    })
    if (this.isEdit) {
      this.product = this.dataService.selectedProduct
    } else {
      this.product = {}
    }
  }

  public submitForm() {
    if (this.isEdit) {
      this.dataService.updateProduct(this.product.key, this.product)
    } else {
      this.dataService.addProduct(this.product)
    }
  }

  public onFileChange(file) {
    if (file) {
      this.product.image = file
    }
  }
}
