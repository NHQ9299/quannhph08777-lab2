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
  removeProduct(id){
    return this.products = this.products.filter(product => product.id != id)
  }
  addProduct(product){
    this.products.push(product);
    console.log(this.products)

  }


}