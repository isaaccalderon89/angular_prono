import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Cocktail, Cocktails } from '../type/cocktail.type';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {
  urlFirebaseCocktails: string = `https://ejemplos-dc1c1.firebaseio.com/curso-angular-caser-4/cocktails/isaac`

  constructor(private http: HttpClient) { }

  getCocktails(searchBy: string): Observable<any> {
    return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchBy}`)
  }

  saveCocktail(cocktail: Cocktail): Observable<{name:string}> {
    return this.http.post<{name:string}>(`${this.urlFirebaseCocktails}.json`, cocktail)
  }

  getFavoriteCocktails(): Observable<Cocktail[]> {
    return this.http.get<{ [key: string]: Cocktail }>(`${this.urlFirebaseCocktails}.json`)
      .pipe(
        map((data: { [key: string]: Cocktail }): Cocktail[] => {
          const cocktails: Cocktail[] = [];

          for (const id in data) {
            const cocktail = new Cocktail(
              data[id].idDrink,
              data[id].strDrink,
              data[id].strDrinkThumb,
              data[id].strInstructions,
              id
            )

            cocktails.push(cocktail)

          }
          return cocktails;
        })
      );
      }

      deleteFavouriteCocktail(cocktailId: string) Observable<nul>{
        return this.http.delete<null>(`${this.urlFirebaseCocktails}/${cocktailId}.json`)
      }
}