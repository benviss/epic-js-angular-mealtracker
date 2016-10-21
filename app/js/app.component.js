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
var food_model_1 = require('./food.model');
var AppComponent = (function () {
    function AppComponent() {
        this.masterFoodList = [
            new food_model_1.Food("Kung Pao Chicken", "yum", 750),
            new food_model_1.Food("CheeseBurger", "also Yum", 675),
            new food_model_1.Food("BreakFast Burrito", "It was for Dinner", 575),
            new food_model_1.Food("Thai Curry", "Very delicioso, also Yum", 875),
            new food_model_1.Food("Pad Thai", "also Very Yum", 975)
        ];
        this.newFoodView = true;
        this.statisticsView = false;
    }
    AppComponent.prototype.switchHeaderPane = function () {
        if (this.newFoodView) {
            this.newFoodView = false;
            this.statisticsView = true;
        }
        else {
            this.newFoodView = true;
            this.statisticsView = false;
        }
    };
    AppComponent.prototype.addFoodToMasterFoodList = function (food) {
        this.masterFoodList.push(food);
        console.log(food);
        console.log(this.masterFoodList);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <div class=\"container\">\n    <h1>Meal Tracker to the max, ya know</h1>\n    <div class=\"jumbotron header-pane\">\n      <button id=\"header-pane-toggle\" (click)=\"switchHeaderPane()\">Toggle View</button>\n      <new-food *ngIf=\"newFoodView === true\"\n      (newFoodSender)=\"addFoodToMasterFoodList($event)\"\n      ></new-food>\n      <statistics *ngIf=\"statisticsView === true\"\n      (newFoodSender)=\"addFoodToMasterFoodList($event)\"\n      ></statistics>\n    </div>\n\n\n    <food-list\n    [childFoodList]=\"masterFoodList\"\n    ></food-list>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map