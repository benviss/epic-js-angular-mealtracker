import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `

  <label for="caloriesSort">Sort by Calories</label>
  <select (change)="onCalorieAscensionChange($event.target.value)">
    <option value="none" selected="selected">No Sort</option>
    <option value="high">High to Low</option>
    <option value="low">Low to High</option>
  </select>
  <select (change)="onCalorieFilterChange($event.target.value)">
    <option value="none" selected="selected">No Sort</option>
    <option value="high-range">Higher Than 500 Calories</option>
    <option value="low-range">Lower Than 500 Calories</option>
  </select>
  <div class="scrollable">
    <div *ngFor="let food of childFoodList | caloriesAscensionPipe:calorieAscension | caloriesPipe: calorieFilter">
      <div (click)="selectFood(food)" *ngIf="selectedFood !== food">
        <hr>
        <p>Name: {{food.name}}</p>
        <p>Details: {{food.details}}</p>
        <p>Calories: {{food.calories}}</p>
        <hr>
      </div>
      <div *ngIf="selectedFood === food">
        <edit-food
          [(childFood)]="selectedFood"
          (finishEditSender)="finishEdit()"
        ></edit-food>
      </div>
    </div>
  </div>
  `
})

export class FoodListComponent {
  public calorieAscension: string = "none";
  public calorieFilter: string = "none";
  public selectedFood: Food = null;

  @Input() childFoodList: Food[];
  @Output() selectedFoodSender = new EventEmitter();

  selectFood(food: Food) {
    this.selectedFood = food;
    console.log(food);
  }
  onCalorieAscensionChange(newAscension: string) {
    this.calorieAscension = newAscension;
  }
  onCalorieFilterChange(newFilter: string) {
    console.log(newFilter)
    this.calorieFilter = newFilter;
  }
  finishEdit() {
    this.selectedFood = null;
  }
}
