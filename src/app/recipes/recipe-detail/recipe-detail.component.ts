import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;


  toggled: boolean = false;


  constructor() {
  }

  ngOnInit(): void {
    console.log(this.toggled);
  }


  onToggle() {
    this.toggled = !this.toggled;
    console.log(this.toggled);
  }
}
