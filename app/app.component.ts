import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <h4>Meal Tracker to the max, ya know</h4>
  <new-food
  (newFoodSender)="addFoodToMasterFoodList($event)"
  ></new-food>

  <food-list
  [childFoodList]="masterFoodList"
  ></food-list>
  `
})

export class AppComponent {
  public masterFoodList: Food[] = [
    new Food("Kung Pao Chicken", "yum", 750),
    new Food("CheeseBurger", "also Yum", 675),
    new Food("BreakFast Burrito", "It was for Dinner", 575),
    new Food("Thai Curry", "Very delicioso, also Yum", 875),
    new Food("Pad Thai", "also Very Yum", 975)
  ];
  addFoodToMasterFoodList(food: Food) {
    this.masterFoodList.push(food);
    console.log(food);
    console.log(this.masterFoodList)
  }
}
