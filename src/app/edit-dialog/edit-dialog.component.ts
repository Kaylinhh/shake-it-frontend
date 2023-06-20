import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl, Form } from '@angular/forms';
import { Cocktail } from '../shared/models/cocktail.model';
import { Ingredient } from '../shared/models/ingredient.model';
import { CocktailService } from '../shared/services/cocktail.service';
import { DialogService, DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {

  editForm!: FormGroup;
  ingredientForm!: FormGroup;
  cocktail!: Cocktail;
  ingredient!: Ingredient;
  ingredientList: Ingredient[] = [];

  constructor(
    private cocktailService: CocktailService,
    private dialogService: DialogService,
    private config: DynamicDialogConfig,
    private ref: DynamicDialogRef,
    private formBuilder: FormBuilder,

  ){}

  ngOnInit(): void {
    this.cocktail = this.config.data;
    this.initEditForm()
  }

  log(){
    console.log(this.dialogService)
  }

  private initEditForm(): void {
    this.editForm = this.formBuilder.group({
      label: [this.cocktail.label, [Validators.required]],
      ingredientList: this.formBuilder.array([      
        this.initIngredientList()
      ])
    })
  }

  initIngredientList(){
    this.ingredientForm = this.formBuilder.group({
        label: [this.cocktail.label, Validators.required]
      });
    }

    get ingredientArray(): FormArray{
      return this.editForm.get('ingredientList') as FormArray

    }

    addIngredient(): void {
      this.ingredientArray.push(this.ingredientArray)
      console.log(this.editForm.value)
    }
  
}
