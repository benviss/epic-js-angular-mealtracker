import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
  <hr>
  <label>Name: </label><input #name (change)="onFoodNameChange(name.value)" value="{{childFood.name}}"><br>
  <label>Details: </label><input #details (change)="onFoodDetailsChange(details.value)" value="{{childFood.details}}"><br>
  <label>Calories: </label><input #calories type="number" (change)="onFoodCaloriesChange(calories.value)" value="{{childFood.calories}}"><br>
  <button (click)="finishEdit()">Done</button>
  <hr>  `
})

export class EditFoodComponent {
@Input() childFood: Food;
@Output() finishEditSender = new EventEmitter();

  onFoodNameChange(name: string) {
    this.childFood.name = name;
  }
  onFoodDetailsChange(details: string) {
    this.childFood.details = details;
  }
  onFoodCaloriesChange(calories) {
    this.childFood.calories = parseInt(calories);
  }
  finishEdit() {
    this.finishEditSender.emit();
  }

}
