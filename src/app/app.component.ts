import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-project';
  boolForRecipe:boolean = true;
  hideShowRecipeShopping(key:string){
    if(key=='recipe'){
      this.boolForRecipe = true;
    }else{
      this.boolForRecipe = false;

    }
  }
}
