import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from 'src/app/recipe/recipe.model';
// import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Steak', 'Nice delicious steak',
    'https://www.omahasteaks.com/blog/wp-content/uploads/2019/09/Grilling-Flat-Irons-BP-1080x610.jpg'),
    new Recipe('Salat', 'Actually this is not salad',
    'https://www.omahasteaks.com/blog/wp-content/uploads/2019/09/Grilling-Flat-Irons-BP-1080x610.jpg')
  ];


  constructor() { }

  @Output() theRecipe = new EventEmitter<Recipe>();
  ngOnInit() {
  }

  onRecipeSelect(recipe: Recipe) {
    this.theRecipe.emit(recipe);
  }

}
