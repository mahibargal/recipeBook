import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomato', 5),
        new Ingredient('Carrot', 5)
    ];
    ingredientsChanged = new EventEmitter<Ingredient>();

    getIngredients() {
        return this.ingredients.slice();    //slice makes a copy of ingredients
    }

    addNewIngredient(ingredient) {
        this.ingredients.push(ingredient);
    }
}