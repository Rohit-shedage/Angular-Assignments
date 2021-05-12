import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MainContainerComponent } from '../main-container/main-container.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   menus:any = [];

  constructor() { 
    this.menus = [
      { name:'Home',link:''},
      { name:'About',link:'about'},
      { name:'Services',link:'services'},
      { name:'Client',link:'client'},
      { name:'Blog',link:'blog'},
      { name:'Contact',link:'contact'},
      { name:'Main',link:'main-container'},
    ]
  }

  ngOnInit(): void {
  }

}
