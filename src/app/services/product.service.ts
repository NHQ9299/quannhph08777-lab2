import { Injectable } from '@angular/core';
import {data} from '../data';
import {Product} from '../Product';

@Injectable()
export class SService {
  products = data;

  constructor() { }

 getProducts(){
      return this.products;
  }
  getProduct(id){
    return this.products.find(product => product.id == id);
  }

  removeProduct(id){
    return this.products = this.products.filter(product => product.id != id)
  }
  addProduct(product){
    this.products.push(product);

  }

  editProduct(id){
    let a = this.products.find(product => product.id == id);
  }


}