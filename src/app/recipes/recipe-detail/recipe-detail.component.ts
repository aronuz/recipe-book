import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe_detail: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe_detail.ingredients);
  }
}
