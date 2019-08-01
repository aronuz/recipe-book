import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
    ingredientsChanged =  new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomato', 10)    
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        // causes many event emitions
        // for (let ingredient of ingredients){
        //     this.addIngredient(ingredient)
        // }
        this.ingredients.push(...ingredients); //spread operator
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}