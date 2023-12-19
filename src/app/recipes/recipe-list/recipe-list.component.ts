import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes:Recipe[] = [
  new Recipe('A test recipe','this a simply test','https://th.bing.com/th/id/OIP.Zn_B96YSAVNC8A-hjoXJ9AHaE4?rs=1&pid=ImgDetMain'),
  new Recipe('A test recipe','this a simply test','https://th.bing.com/th/id/OIP.Zn_B96YSAVNC8A-hjoXJ9AHaE4?rs=1&pid=ImgDetMain'),
];
  constructor() { }

  ngOnInit(): void {
  }

}
