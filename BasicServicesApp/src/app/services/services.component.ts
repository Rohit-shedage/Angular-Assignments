import { Component, OnInit } from '@angular/core';
import { SampleServiceService } from '../sample-service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  products:any;
  constructor(private SSPObj: SampleServiceService) { }

  ngOnInit(){
    
    this.SSPObj.ProductList().subscribe((data) =>{
      //this.products =  data;
      this.products = data;
      console.log(this.products);
    })

    //console.log(this.SSPObj.ProductList());
    
  }

}
