import { Component, OnInit } from '@angular/core';

//import { RecipeService } from './recipe.service'; recipe service component is destroyed when navigate to shopping component

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  //providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
