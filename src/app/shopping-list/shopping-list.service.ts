import { Ingredient } from './../ingredient/ingredient.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private ingredients: Ingredient[];

  constructor() {
    this.ingredients = [
      new Ingredient('Apples', 5),
      new Ingredient('Tomatoes', 10),
    ];
  }

  getIngredients = () => this.ingredients;

  addIngredient = (ingridient: Ingredient) => this.ingredients.push(ingridient);

  addIngredients = (ingridients: Ingredient[]) => this.ingredients.push(...ingridients);
}
