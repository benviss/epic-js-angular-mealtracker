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
var NewFoodComponent = (function () {
    function NewFoodComponent() {
        this.newFoodSender = new core_1.EventEmitter();
    }
    NewFoodComponent.prototype.addFood = function (name, details, calories) {
        var food = new food_model_1.Food(name, details, parseInt(calories));
        this.newFoodSender.emit(food);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NewFoodComponent.prototype, "newFoodSender", void 0);
    NewFoodComponent = __decorate([
        core_1.Component({
            selector: 'new-food',
            template: "\n    <h3>Enter Food Info: </h3>\n    <div class=\"new-food-input\">\n      <input #name placeholder=\"Name\">\n      <input #details placeholder=\"Details\">\n      <input type=\"number\" #calories placeholder=\"Calories(Be Honest...)\">\n      <button (click)=\n      \"addFood(name.value , details.value, calories.value);\n      name.value='';\n      details.value='';\n      calories.value='';\"\n      >Submit Food</button>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], NewFoodComponent);
    return NewFoodComponent;
}());
exports.NewFoodComponent = NewFoodComponent;
//# sourceMappingURL=new-food.component.js.map