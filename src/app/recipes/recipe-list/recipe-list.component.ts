import { Component, OnInit } from '@angular/core';
import { Recipe }            from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test1 Recipe', 'This is simply a test', 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
    new Recipe('A Test2 Recipe', 'This is simply a test', 'https://images.pexels.com/photos/5713767/pexels-photo-5713767.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
    new Recipe('A Test3 Recipe', 'This is simply a test', 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
