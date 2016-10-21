import { Component, Input} from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'statistics',
  template: `
    <h3>Total Calories: {{childFoodStats[0]}}</h3>
    <h3>Average Calories: {{childFoodStats[1]}}</h3>
  `
})

export class StatisticsComponent {
  @Input() childFoodStats: number[];
}
