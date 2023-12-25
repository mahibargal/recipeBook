import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
 @Input() recipe:Recipe;// getting recipe from recipe list component
//  @Output() recipeSelected = new EventEmitter<any>();

  constructor(private recipeServ:RecipeService) { }

  ngOnInit(): void {
    console.log(this.recipe)
  }
  onSelected(){
    this.recipeServ.recipeSelected.emit(this.recipe);
  //  this.recipeSelected.emit()
  }
}
