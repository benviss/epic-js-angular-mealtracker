import { Component, Input } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
  <div *ngFor="let food of childFoodList">
    <hr>
    <p>Name: {{food.name}}</p>
    <p>Details: {{food.details}}</p>
    <p>Calories: {{food.calories}}</p>
    <hr>
  </div>
  `
})



export class FoodListComponent {
  @Input() childFoodList: Food[];
}
