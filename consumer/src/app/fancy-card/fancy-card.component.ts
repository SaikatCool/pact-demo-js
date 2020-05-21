import {Component, Input} from '@angular/core';

/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'app-card-fancy-example',
  templateUrl: 'fancy-card.component.html',
  styleUrls: ['fancy-card.component.css'],
})
export class FancyCardComponent {

  @Input()
  cardDetails;
}
