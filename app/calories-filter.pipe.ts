import {Pipe, PipeTransform} from '@angular/core';
import {Food} from './food.model';

@Pipe({
  name: 'caloriesPipe',
  pure: false
})

export class CaloriesFilterPipe implements PipeTransform {
  transform(input: Food[], filterChoice) {
    var output: Food[] = [];
    if(filterChoice === "low-range") {
      for (let i = 0; i < input.length; i++) {
        if(input[i].calories <= 500) {
          output.push(input[i])
        }
      }
      return output;
    } else if (filterChoice === "high-range") {
      for (let i = 0; i < input.length; i++) {
        if(input[i].calories > 500) {
          output.push(input[i])
        }
      }
      return output;
    } else {
      return input;
    }
   }
}
