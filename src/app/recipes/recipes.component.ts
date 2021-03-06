import { RecipiesService } from './recipies.service';
import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipe: Recipe;
  constructor(private recipesService: RecipiesService) {
  }

  ngOnInit(): void {
    this.recipesService.recipeSelected
      .subscribe((recipeFromService: Recipe) => this.recipe = recipeFromService);
  }
}
