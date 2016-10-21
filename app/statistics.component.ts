import { Component, Input} from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'statistics',
  template: `
    <h1></h1>
  `
})

export class StatisticsComponent {
  @Input() childFoodList: Food[];
}
