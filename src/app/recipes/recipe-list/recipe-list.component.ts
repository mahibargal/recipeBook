import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes:Recipe[] = [
  new Recipe('A test recipe','this a simply test','https://th.bing.com/th/id/OIP.Zn_B96YSAVNC8A-hjoXJ9AHaE4?rs=1&pid=ImgDetMain'),
  new Recipe('A second test recipe','this a simply second test','https://d1dd4ethwnlwo2.cloudfront.net/wp-content/uploads/2016/12/Roasted-Balsamic-Cranberry-Chicken-Horizontal-1.jpg'),
];
@Output()recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }
  currentRecipeToShow(recipe){
    debugger;
   this.recipeWasSelected.emit(recipe)
  }
}
