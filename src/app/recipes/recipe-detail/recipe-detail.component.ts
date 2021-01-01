import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute, // route는 현재 route정보 등을 가져오기 위해서
              private router: Router) { // router는 method를 사용하기 위해서
  }

  ngOnInit() {
    // const id = this.route.snapshot.params['id'] // only work for the first time when we load the component
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id']; // 주소창 params에서 :id위치부분 값 받아와서
        this.recipe = this.recipeService.getRecipe(this.id); // getRecipe 펑션 - 레시피들중에 n번째 레시피 리턴함에 n 번째로 넣어줌
      }
    );
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
    // this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route }); // navigate 메소드를 쓰면 recipe/1 --> recipe ---> recipe/1/edit으로 레벨도 변경할 수 있다.
  }
}
