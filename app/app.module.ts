import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { NewFoodComponent }   from './new-food.component';
import { FoodListComponent }   from './food-list.component';
import { CaloriesAscensionFilterPipe }   from './calories-ascension-filter.pipe';
import { CaloriesFilterPipe }   from './calories-filter.pipe';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    NewFoodComponent,
    CaloriesAscensionFilterPipe,
    CaloriesFilterPipe,
    FoodListComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
