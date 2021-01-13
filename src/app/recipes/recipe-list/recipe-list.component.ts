import { Recipe } from '../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-taco-lime-shrimp-still006-1527253576.jpeg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
