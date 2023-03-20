import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemCocktailComponent } from './item-cocktail/item-cocktail.component';
import { SearchCocktailComponent } from './search-cocktail/search-cocktail.component';

const routes: Routes = [
  { path: 'search', component: SearchCocktailComponent },
  { path: 'item/:id', component: ItemCocktailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
