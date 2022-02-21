import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {

  //*this anahtar kelimesi Javascript de sert'tir C# ve java daki gibi rahat edemezsiniz.
  products:Product[] = [ //*Buradaya tip verirken Product yazarken açılan Intellisense de Product olanı seçersen import'u otomatik yapıyor.
      
  ];

  constructor() {}

  ngOnInit(): void {}
}
