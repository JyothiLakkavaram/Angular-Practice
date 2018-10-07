import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularServices';
  Assignonclick;
  constructor(public serviceRef : DataService) {
    this.title = serviceRef.SayHello();
  }

  callServiceOnBtnClick(){
    this.Assignonclick = this.serviceRef.SayHello();
  }
}
