import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleServiceService {

  constructor() { }

  ProductList(){
    let product = [
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

    return product;
  }
}
