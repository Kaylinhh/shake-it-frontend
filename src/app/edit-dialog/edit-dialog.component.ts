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
  editFormCocktail!: Cocktail;

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

  private initEditForm(): void {
    this.editForm = this.formBuilder.group({
      label: [this.cocktail.label, [Validators.required]],
      ingredientList: [this.cocktail.ingredientList]
    })
  }

    update(){
      this.editFormCocktail = this.editForm.value
      this.cocktailService.update(this.config.data.id, this.editFormCocktail)
      this.ref.close()
      console.log(this.cocktail)
    }
  
}
