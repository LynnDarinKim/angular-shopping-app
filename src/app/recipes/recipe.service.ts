import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list-service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'lunch',
      'This is simply a test1',
      'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fried', 20)
      ]
    ),
    new Recipe(
      'Burger',
      'This is simply a test2',
      'https://images.pexels.com/photos/5713767/pexels-photo-5713767.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]
    ),
    new Recipe(
      'Dinner',
      'This is simply a test3',
      'https://images.pexels.com/photos/6061405/pexels-photo-6061405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Tomatoes', 20)
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice(); // to return a copied array
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
