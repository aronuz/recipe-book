import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { Recipe } from '../recipes/recipes.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({providedIn: 'root'})
export class DataStorageService{
    constructor(private http: HttpClient, private recipeService: RecipeService){}

    storeRecipes(){
        const recipes = this.recipeService.getRecipes();
        //return this.http.post('https://') used to subscribe in caller (ie. with a spinner)
        this.http.post('https://').subscribe(
            response => {
                console.log(response);
            }
        );
    }

    fetchRecipes(){
        return this.http.get<Recipe[]>('https://').pipe(
            map(recipes => {
                return recipes.map(recipe => {
                    return{...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
                });
            }).tap(recipes => {
                this.recipeService.setRecipes(recipes);
            }
        )
        // .subscribe(
        //     recipes => {
        //         this.recipeService.setRecipes(recipes);
        //     }
        // );
    }
}