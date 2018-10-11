import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
Productname : string = 'NP';
Productdescription: string = "This product is used for...";
Productcost: number = 5000;
Productreviews: [
      {
        name: 'pavan', review: 'This product is good.'
      },
      {
        name: 'Jyothi', review: 'This product is okay.'
      }
  ]
}
