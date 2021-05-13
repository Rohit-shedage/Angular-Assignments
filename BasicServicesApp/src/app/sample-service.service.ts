import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SampleServiceService {

  constructor(private httpclient:HttpClient ) {}

  ProductList(){
   /*  let product = [
      {
        name:'Asus',
        model:'1111'
      },
      {
        name:'Mac',
        model:'2222'
      },
      {
        name:'Lenovo',
        model:'3333'
      },
      {
        name:'Tosiba',
        model:'4444'
      }
    ];

    return product; */
     return this.httpclient.get('https://fakestoreapi.com/products');
  }
}
