import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchCocktailComponent } from './search-cocktail/search-cocktail.component';
import { ItemCocktailComponent } from './item-cocktail/item-cocktail.component';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    SearchCocktailComponent,
    ItemCocktailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
