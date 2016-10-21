import {Pipe, PipeTransform} from '@angular/core';
import {Food} from './food.model';

@Pipe({
  name: 'caloriesAscensionPipe',
  pure: false
})

export class CaloriesAscensionFilterPipe implements PipeTransform {
  transform(input: Food[], filterChoice) {
     console.log(filterChoice)
     var output: Food[] = input.slice(0);

     if(filterChoice === "high") {
       output.sort(function(a, b){
         return b.calories-a.calories
       });
       return output;
     } else if(filterChoice === "low"){
       output.sort(function(a, b){
         return a.calories-b.calories
       });
       return output;
     } else {
       return input;
     }
   }
}
