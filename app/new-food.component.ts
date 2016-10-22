import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
    <h3>Enter Food Info: </h3>
    <div class="new-food-input">
      <input #name placeholder="Name">
      <input #details placeholder="Details">
      <input type="number" #calories placeholder="Calories(Be Honest...)">
      <button (click)=
      "addFood(name.value , details.value, calories.value);
      name.value='';
      details.value='';
      calories.value='';"
      >Submit Food</button>
    </div>
  `
})

export class NewFoodComponent {
  @Output() newFoodSender = new EventEmitter();

  addFood(name: string, details: string, calories) {
    var food: Food = new Food(name, details, parseInt(calories))
    this.newFoodSender.emit(food);
  }
}
