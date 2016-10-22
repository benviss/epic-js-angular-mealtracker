import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Shape Up</h1>
    <div class="jumbotron header-pane">
      <button id="header-pane-toggle" (click)="switchHeaderPane()">Toggle View</button>
      <new-food *ngIf="newFoodView === true"
        (newFoodSender)="addFoodToMasterFoodList($event)"
      ></new-food>
      <statistics
        *ngIf="statisticsView === true"
        [childFoodStats]="masterFoodList | foodStatPipe"
      ></statistics>
    </div>
    <food-list
      [childFoodList]="masterFoodList"
    ></food-list>
  </div>
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

  public newFoodView = true;
  public statisticsView = false;

  switchHeaderPane() {
    if(this.newFoodView) {
      this.newFoodView = false;
      this.statisticsView = true;
    } else {
      this.newFoodView = true;
      this.statisticsView = false;
    }
  }
  addFoodToMasterFoodList(food: Food) {
    this.masterFoodList.push(food);
    console.log(food);
    console.log(this.masterFoodList)
  }
}
