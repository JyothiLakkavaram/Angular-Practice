import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['angular', 'react','view'];

  userModel = new User('sds','erwe@ew',44444444,'','morning',true)
}
