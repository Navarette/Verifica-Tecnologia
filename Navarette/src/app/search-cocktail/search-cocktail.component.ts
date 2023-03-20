import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-cocktail',
  templateUrl: './search-cocktail.component.html',
  styleUrls: ['./search-cocktail.component.css']
})
export class SearchCocktailComponent {
  query!: string;
  title = 'search-cocktail';
  results: any;
  obsCocktail!: Observable<Object>;
  // faccio iniettare lo spotify service e faccio una ricerca
  constructor(public ApiService: ApiService) {

  }

  submit(query: HTMLInputElement): void {

    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsCocktail = this.ApiService.searchCocktail(this.query);
    this.obsCocktail.subscribe((data) => { this.results = data; console.log(this.results) });
  }

  renderResults(res: any): void {
    this.results = null;
    if (res && res.drinks && res.drinks.strDrink) {
      this.results = res.drinks.strDrink;
    }
  }
}
