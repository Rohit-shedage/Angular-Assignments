import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnWayAndTwoWayDataBinding';

  Name = "Rohit Shedage It Is Done By Interpolation Two {{}} Brace Variable";

  UserNameObj = {FN:'Rohit',LN:'Shedage',str:'Interpolation Using Property'};
  UserName2Obj = {FN:'Rohit',LN:'Shedage',str:'Attribute Binding'};

  Name2 = "Rohit Shedage It Is Done By Property Two [] Brace Variable";

  Link="../assets/Fork_Logo_PNG_ICON.icon";

  alt="Images";

  ColVal = 2;

  SayHello(){
    alert("Hello World...!");
  }

  SayHelloMO(){
    alert("Mouse Over Event...!");
  }

  Data = "";
}
