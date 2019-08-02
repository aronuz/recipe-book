import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipes.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('test', 'desc', 'https://www.belightsoft.com/products/imagetricks/img/core-image-filters@2x.jpg', [
            new Ingredient('xxx', 1),
            new Ingredient('yyy', 2)
        ]),
        new Recipe('slide', 'slide desc', 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png', [
            new Ingredient('aaa', 1),
            new Ingredient('zzz', 2)
        ])
    ]

    constructor(private slService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(id: number){
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}