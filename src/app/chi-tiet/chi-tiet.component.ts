import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../Product';
@Component({
  selector: 'app-chi-tiet',
  templateUrl: './chi-tiet.component.html',
  styleUrls: ['./chi-tiet.component.css']
})
export class ChiTietComponent implements OnInit {
@Input ('data') chiTiet: Product;
  constructor() { }

  ngOnInit() {
  }

}