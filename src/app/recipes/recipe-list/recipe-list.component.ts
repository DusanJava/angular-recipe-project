import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A new recipe', 'Test',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hand-held-bbq-favorites-royalty-free-image-694189032-1564779029.jpg?resize=480:*'),
    new Recipe('Other recipe', 'Real',
      'https://eatforum.org/content/uploads/2018/05/EAT_pasta_tomato_basil_2018_1200x675-900x675.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
