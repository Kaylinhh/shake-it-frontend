import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';
import { DragDropModule } from 'primeng/dragdrop';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { PasswordModule } from 'primeng/password';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        TabMenuModule,
        ButtonModule,
        DragDropModule,
        DialogModule,
        TableModule,
        DynamicDialogModule,
        PasswordModule
    ],
    providers: [DialogService],
    exports: [
        CommonModule,
        TabMenuModule,
        ButtonModule,
        DragDropModule,
        DialogModule,
        TableModule,
        DynamicDialogModule,
        PasswordModule
        ]
  })
  export class PrimengModule { }
  