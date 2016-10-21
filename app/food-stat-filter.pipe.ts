import {Pipe, PipeTransform} from '@angular/core';
import {Food} from './food.model';

@Pipe({
  name: 'foodStatPipe',
  pure: false
})

export class FoodStatFilterPipe implements PipeTransform {
  transform(input: Food[]) {
    var output: number[] = [];
    var calorieCount: number = 0;
    for (let i = 0; i < input.length; i++) {
      calorieCount += input[i].calories;
    }
    output.push(calorieCount);
    output.push((calorieCount / input.length));
    return output;
   }
}
