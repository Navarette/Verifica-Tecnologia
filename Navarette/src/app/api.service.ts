import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }
  searchCocktail(query: string) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer'
    })

    let obsCocktail = this.http.get(url, { headers });
    return obsCocktail
  }
}
