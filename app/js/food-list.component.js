"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var FoodListComponent = (function () {
    function FoodListComponent() {
        this.calorieAscension = "none";
        this.calorieFilter = "none";
        this.selectedFood = null;
        this.selectedFoodSender = new core_1.EventEmitter();
    }
    FoodListComponent.prototype.selectFood = function (food) {
        this.selectedFood = food;
        console.log(food);
    };
    FoodListComponent.prototype.onCalorieAscensionChange = function (newAscension) {
        this.calorieAscension = newAscension;
    };
    FoodListComponent.prototype.onCalorieFilterChange = function (newFilter) {
        console.log(newFilter);
        this.calorieFilter = newFilter;
    };
    FoodListComponent.prototype.finishEdit = function () {
        this.selectedFood = null;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], FoodListComponent.prototype, "childFoodList", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FoodListComponent.prototype, "selectedFoodSender", void 0);
    FoodListComponent = __decorate([
        core_1.Component({
            selector: 'food-list',
            template: "\n\n  <label for=\"caloriesSort\">Sort by Calories</label>\n  <select (change)=\"onCalorieAscensionChange($event.target.value)\">\n    <option value=\"none\" selected=\"selected\">No Sort</option>\n    <option value=\"high\">High to Low</option>\n    <option value=\"low\">Low to High</option>\n  </select>\n  <select (change)=\"onCalorieFilterChange($event.target.value)\">\n    <option value=\"none\" selected=\"selected\">No Sort</option>\n    <option value=\"high-range\">Higher Than 500 Calories</option>\n    <option value=\"low-range\">Lower Than 500 Calories</option>\n  </select>\n  <div class=\"scrollable\">\n    <div *ngFor=\"let food of childFoodList | caloriesAscensionPipe:calorieAscension | caloriesPipe: calorieFilter\">\n      <div (click)=\"selectFood(food)\" *ngIf=\"selectedFood !== food\">\n        <hr>\n        <p>Name: {{food.name}}</p>\n        <p>Details: {{food.details}}</p>\n        <p>Calories: {{food.calories}}</p>\n        <hr>\n      </div>\n      <div *ngIf=\"selectedFood === food\">\n        <edit-food\n        [(childFood)]=\"selectedFood\"\n        (finishEditSender)=\"finishEdit()\"\n        ></edit-food>\n      </div>\n    </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], FoodListComponent);
    return FoodListComponent;
}());
exports.FoodListComponent = FoodListComponent;
//# sourceMappingURL=food-list.component.js.map