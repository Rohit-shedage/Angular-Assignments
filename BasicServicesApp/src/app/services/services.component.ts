import { Component, OnInit } from '@angular/core';
import { SampleServiceService } from '../sample-service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private SSPObj: SampleServiceService) { }

  ngOnInit(){
    console.log(this.SSPObj.ProductList());
  }

}
