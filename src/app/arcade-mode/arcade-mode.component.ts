import { Ingredient } from './../shared/models/ingredient.model';
import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../shared/services/ingredient.service';
import { CocktailService } from '../shared/services/cocktail.service';
import { Cocktail } from '../shared/models/cocktail.model';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { BindService } from '../shared/services/bind.service';

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

  constructor(private ingredientService: IngredientService,
              private cocktailService: CocktailService
    ) { }

  ngOnInit(): void {
    // this.ingredientService.getAll().subscribe(data => {
    //   this.ingredientList = data
    // })
    this.ingredientList$ = this.ingredientService.getAll()
    this.cocktailInit();
    this.formGroup = new FormGroup({
      label: new FormControl<string | null>(null)
    })
  }

  cocktailInit() {
    this.cocktail = {
      label: "",
      ingredientList: []
    }
  }

  dragStart(ingredient: Ingredient){
    this.draggedIngredient = ingredient
  }

  drop(){
    if (this.draggedIngredient) {
      // let draggedIngredientIndex = this.findIndex(this.draggedIngredient);
      this.cocktail.ingredientList = [...(this.cocktail.ingredientList as Ingredient[]), this.draggedIngredient];
      // this.ingredientList$ = this.ingredientList?.filter((val, i) => i != draggedIngredientIndex)
      this.ingredientList.push(this.draggedIngredient)
      this.draggedIngredient = null;

      
    }
  }

  dragEnd(){
    this.draggedIngredient = null;
  }

  // findIndex(ingredient: Ingredient){
  //   let index = -1;
  //   for (let i = 0; i < (this.ingredientList as Ingredient[]).length; i++){
  //     if (ingredient.id === (this.ingredientList as Ingredient[])[i].id){
  //       index = i;
  //       break;
  //     }
  //   }
  //   return index;
  // }

  add(){
    this.cocktailService.create(this.cocktail).subscribe((cocktailCreated: Cocktail) => {
      console.log("banane", cocktailCreated)
    })
  }

  log() {
    console.log(this.cocktail, this.ingredientList)
  }

}
