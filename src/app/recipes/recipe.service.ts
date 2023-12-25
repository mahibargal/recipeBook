import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService{
   private recipes:Recipe[] = [
        new Recipe('A test recipe','this a simply test','https://th.bing.com/th/id/OIP.Zn_B96YSAVNC8A-hjoXJ9AHaE4?rs=1&pid=ImgDetMain'),
        new Recipe('A second test recipe','this a simply second test','https://d1dd4ethwnlwo2.cloudfront.net/wp-content/uploads/2016/12/Roasted-Balsamic-Cranberry-Chicken-Horizontal-1.jpg'),
      ];
recipeSelected  = new EventEmitter<Recipe>();
      getRecipe(){
        return this.recipes.slice();
      }
}