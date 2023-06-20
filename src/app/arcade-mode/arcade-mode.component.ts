import { Ingredient } from './../shared/models/ingredient.model';
import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../shared/services/ingredient.service';
import { CocktailService } from '../shared/services/cocktail.service';
import { Cocktail } from '../shared/models/cocktail.model';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-arcade-mode',
  templateUrl: './arcade-mode.component.html',
  styleUrls: ['./arcade-mode.component.scss']
})
export class ArcadeModeComponent implements OnInit {

  ingredientList$!: Observable<Ingredient[]>
  ingredientList: Ingredient[] = [];
  draggedIngredient!: Ingredient | undefined | null;
  cocktail!: Cocktail;
  formGroup!: FormGroup;
  label!: string;
  shakerUrl: string = "../assets/shaker.png"



  constructor(private ingredientService: IngredientService,
              private cocktailService: CocktailService
  ) { }

  ngOnInit(): void {

    this.ingredientList$ = this.ingredientService.getAll()
    this.cocktailInit();
    this.formGroup = new FormGroup({
      label: new FormControl<string | null>(null)
    })
  }

  cocktailInit() {
    this.cocktail = {
      id: 0,
      label: "",
      ingredientList: []
    }
  }

  dragStart(ingredient: Ingredient){
    this.draggedIngredient = ingredient
  }

  drop(){
    if (this.draggedIngredient) {
      this.cocktail.ingredientList = [...(this.cocktail.ingredientList as Ingredient[]), this.draggedIngredient];
      this.ingredientList.push(this.draggedIngredient)
      this.draggedIngredient = null;
    }
    console.log(this.draggedIngredient)
  }

  dragEnd(){
    this.draggedIngredient = null;
  }

  add(){
    this.cocktailService.create(this.cocktail).subscribe((cocktailCreated: Cocktail) => {
      console.log(cocktailCreated)
    })
  }

  log() {
    console.log(this.cocktail, this.ingredientList)
  }

}
