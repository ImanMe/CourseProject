import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../ingredient/ingredient.model';

import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})

export class RecipiesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[];

  constructor(private shoppingListService: ShoppingListService) {
    this.recipes = [
      new Recipe('A Test Recipe', 'This is simply a test', 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg', [
        new Ingredient('Meat', 2), new Ingredient('Bun', 2)
      ]),
      new Recipe('Another Test Recipe', 'This is simply another test', 'https://hips.hearstapps.com/delish/assets/17/39/1506456246-delish-healthy-chicken-casserole-1.jpg', [
        new Ingredient('Sugar', 1), new Ingredient('Coffee', 1)
      ])
    ];
  }

  getRecipe = (index: number) => {
    return this.recipes[index];
  }

  getRecipes = () => this.recipes.slice();

  addIngredientsToShoppingList = (ingredients: Ingredient[]) => {
    this.shoppingListService.addIngredients(ingredients);
  }

}
