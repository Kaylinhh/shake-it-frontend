import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';
import { DragDropModule } from 'primeng/dragdrop';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        TabMenuModule,
        ButtonModule,
        DragDropModule,
        DialogModule,
        TableModule,
        DynamicDialogModule
    ],
    providers: [DialogService],
    exports: [
        CommonModule,
        TabMenuModule,
        ButtonModule,
        DragDropModule,
        DialogModule,
        TableModule,
        DynamicDialogModule
        ]
  })
  export class PrimengModule { }
  