import { Component, OnInit } from '@angular/core';
import {data} from '../data';
import {Product} from '../Product';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
products = data;

remove(id){
  return this.products = this.products.filter(product => product.id != id);
}

chiTiet: Product;

show(product){
this.chiTiet = product;
}
}