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
Productreviews = [{'Vamsi': 'This is Good'},{'Hari':'five star one'}]


}
