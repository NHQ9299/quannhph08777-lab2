import { Component, OnInit } from '@angular/core';
import { SService } from '../services/product.service'
import {Product} from '../Product';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
products: Product[];
  constructor(
       private productService: SService
  ) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

chiTiet: Product;

show(product){
this.chiTiet = product;
}
removeItem(id){
    this.products = this.productService.removeProduct(id);
  }
editItem(id){
  this.products = this.productService.editProduct(id);
}
}