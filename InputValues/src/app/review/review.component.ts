import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-child',
    templateUrl: 'review.component.html'
})

export class reviewComponent{
 @Input() public Name;
 @Input('Price') public Productcost;
}