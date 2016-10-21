import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { NewFoodComponent }   from './new-food.component';
import { EditFoodComponent }   from './edit-food.component';
import { StatisticsComponent }   from './statistics.component';
import { FoodListComponent }   from './food-list.component';
import { CaloriesAscensionFilterPipe }   from './calories-ascension-filter.pipe';
import { CaloriesFilterPipe }   from './calories-filter.pipe';
import { FoodStatFilterPipe }   from './food-stat-filter.pipe';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    NewFoodComponent,
    EditFoodComponent,
    StatisticsComponent,
    CaloriesAscensionFilterPipe,
    CaloriesFilterPipe,
    FoodStatFilterPipe,
    FoodListComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
