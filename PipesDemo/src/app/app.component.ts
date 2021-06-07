import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PipesDemo';

  LowercaseExample = 'IT IS LOWERCASE BUILT-IN PIPE DEMO';

  UppercaseExample = 'it is uppercase built-in pipe demo';

  DateExample = Date.now();

  CurrencyExample = 1000;

  PercentExample = 0.67675555555;

  JSONExample = { FirstName:'John', Age:25, Home:'America'};

}
