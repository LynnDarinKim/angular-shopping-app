import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('A Test1 Recipe', 'This is simply a test1', 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
    new Recipe('A Test2 Recipe', 'This is simply a test2', 'https://images.pexels.com/photos/5713767/pexels-photo-5713767.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
    new Recipe('A Test3 Recipe', 'This is simply a test3', 'https://images.pexels.com/photos/6061405/pexels-photo-6061405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
  ];

  getRecipes() {
    return this.recipes.slice(); // to return a copied array
  }
}
