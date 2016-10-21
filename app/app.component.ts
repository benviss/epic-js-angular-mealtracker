import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <h4>Meal Tracker to the max, ya know</h4>
  <new-food
  (newFoodSender)="addFoodToMasterFoodList($event)"
  ></new-food>
  `
})

export class AppComponent {
  public masterFoodList: Food[] = [];
  addFoodToMasterFoodList(food: Food) {
    this.masterFoodList.push(food);
    console.log(food);
    console.log(this.masterFoodList)
  }
}
