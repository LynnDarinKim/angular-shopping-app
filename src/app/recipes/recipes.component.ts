import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.recipeService.recipeSelected // set up listener
      .subscribe( // subscribe recipeSelected and get informed about any changes
        (recipe: Recipe) => { // new EventEmitter<Recipe>(); will give recipe
          // set this selectedRecipe equal to the recipe we got with the event
          this.selectedRecipe = recipe;
          console.log(recipe);
        }
      );

  }

  // recipeService에서 이벤트에미터 만듦.
  // recipe-list 에서 서비스가 갖고있는 recipes 받음 ===> recipes 룹 돌면서 recipe-item의 recipe변수에 데이터 묶음 + 아이템들 하나하나 리스트로 출력
  // recipe-item 클릭 이벤트에 recipeService 이벤트에미터에 데이터 emit함
  // recipes 에서 최하단 recipe-item이 뿌린 데이터를 ngOnInit에서 받아서 subscribe로 다른 아규먼트 들어올 때마다 selectedRecipe에 지정해줌.

}
