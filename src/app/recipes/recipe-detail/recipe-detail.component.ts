import { RecipiesService } from './../recipies.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipiesService: RecipiesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(
        (params: Params) => {
          // tslint:disable-next-line:no-string-literal
          this.id = params.get('id');
          this.recipe = this.recipiesService.getRecipe(this.id);
        });
  }

  addIngredients = () => {
    this.recipiesService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe = () => {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
