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
Productreviews = [
            {name: 'Vamsi', review: 'This is Good'},
            {name: 'Hari', review: 'five star one'}
          ]


}
