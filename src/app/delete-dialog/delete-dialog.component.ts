import { Component } from '@angular/core';
import { CocktailService } from '../shared/services/cocktail.service';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Cocktail } from '../shared/models/cocktail.model';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent {

  cocktail!: Cocktail;

  constructor(
    private cocktailService: CocktailService,
    private dialogService: DialogService,
    private config: DynamicDialogConfig,
    private ref: DynamicDialogRef,

  ){}

  ngOnInit(): void {
    this.cocktail = this.config.data;
  }

  delete(id: number){
    this.cocktailService.delete(id)
    this.ref.close()
    console.log(this.cocktail)
  }
}
