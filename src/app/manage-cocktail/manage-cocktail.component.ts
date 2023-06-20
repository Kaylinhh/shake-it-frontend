import { MessageService } from 'primeng/api';
import { Component } from '@angular/core';
import { Cocktail } from '../shared/models/cocktail.model';
import { CocktailService } from '../shared/services/cocktail.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-manage-cocktail',
  templateUrl: './manage-cocktail.component.html',
  styleUrls: ['./manage-cocktail.component.scss']
})
export class ManageCocktailComponent {

  cocktails!: Cocktail[];
  ref!: DynamicDialogRef | undefined;
  columns!: Column[];

  constructor(private cocktailService: CocktailService,
              private dialogService: DialogService) {}

  ngOnInit() {
      this.cocktailService.getAll().subscribe((data) => {
          this.cocktails = data;
      });

      this.columns = [
          { field: 'id', header: 'id' },
          { field: 'label', header: 'label' },
          { field: '', header: ''}
      ];
  }

  openDeleteDialog(id: number){
    const selectedCocktail: Cocktail[] = this.cocktails.filter(cocktail => cocktail.id === id)
    const [myCocktail] = selectedCocktail;
     this.ref = this.dialogService.open(DeleteDialogComponent, {
      header: 'Delete your cocktail',
      data: {
        id: myCocktail.id,
        label: myCocktail.label,
        ingredientList: myCocktail.ingredientList
      }
     });
     
  }
}
