import { RecipiesService } from './../recipies.service';
import { Recipe } from '../recipe.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private router: Router, private route: ActivatedRoute, private recipiesService: RecipiesService) { }

  ngOnInit(): void {
    this.recipes = this.recipiesService.getRecipes();
  }

  onNewRecipe = () => {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
