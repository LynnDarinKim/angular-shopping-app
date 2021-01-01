import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgModule } from '@angular/core';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes', component: RecipesComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent }, // not in edit mode
      { path: ':id', component: RecipeDetailComponent },
      { path: ':/edit', component: RecipeEditComponent }, // in edit mode
    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent }

];

@NgModule({ // NgModule로 Normal typescript class를 Angular 모듈로 변경
  imports: [
    RouterModule.forRoot(appRoutes) // forRoot to configure RouterModule with appRoutes
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
