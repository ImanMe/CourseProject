import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../ingredient/ingredient.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('inputName', { static: false }) inputNameRef: ElementRef;
  @ViewChild('inputAmount', { static: false }) inputAmountRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem = () => {
    const ingName = this.inputNameRef.nativeElement.value;
    const ingAmount = this.inputAmountRef.nativeElement.value;
    this.shoppingListService.addIngredient(new Ingredient(ingName, ingAmount));
  }
}

