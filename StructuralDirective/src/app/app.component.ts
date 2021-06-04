import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StructuralDirective';

  /* ValueIsEmpty = false; */
  ValueIsEmpty = true;
  Value1 = 20;
  Value2 = 30;

  contacts = [
    {
      FirstName:'Rohit',
      LastName:'Shedage',
    },
    {
      FirstName:'Jayram',
      LastName:'Patil',
    },
    {
      FirstName:'Ganesh',
      LastName:'Kotwal',
    }
  ];

  Models = [
    {
      Name : 'ASUS',
      Price : '25000',
      City : 'Karad',
    },
    {
      Name : 'Mac',
      Price : '25000',
      City : 'Karad',
    },
    {
      Name : 'Lenovo',
      Price : '25000',
      City : 'Karad',
    },
    {
      Name : 'Mac Book',
      Price : '25000',
      City : 'Karad',
    },
    {
      Name : 'ACER',
      Price : '25000',
      City : 'Karad',
    },
    {
      Name : 'ASUS',
      Price : '25000',
      City : 'Karad',
    },
    {
      Name : 'Laptop',
      Price : '25000',
      City : 'Karad',
    },
    {
      Name : 'TOSIBA',
      Price : '25000',
      City : 'Karad',
    },
    {
      Name : 'TCL',
      Price : '25000',
      City : 'Karad',
    },
  ];

  Switch_Value = 'C#_Programing';

  DynamicStyle = 'blue';
  DynamicStyleFont = "50px";
  DynamicStyleColor = "white";

  ClassDynamic = 'C2 C1'; 
  ClassDynamicCon = 'C2'

}
