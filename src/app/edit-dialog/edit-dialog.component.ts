import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      ingredientList: this.formBuilder.array([])
    })
    this.initIngredientList()
    console.log(this.editForm.value)
  }

  initIngredientList(){
    const ingredientList = this.editForm.get('ingredientList') as FormArray;
    this.cocktail.ingredientList.forEach((ingredient) => {
      ingredientList.push(this.formBuilder.group({
        id: [ingredient.id],
        label: [ingredient.label, Validators.required]
      }))
    })
  }
}
