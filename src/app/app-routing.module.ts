import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArcadeModeComponent } from './arcade-mode/arcade-mode.component';
import { StoryModeComponent } from './story-mode/story-mode.component';
import { ManageCocktailComponent } from './manage-cocktail/manage-cocktail.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "arcade", component: ArcadeModeComponent },
  { path: "story", component: StoryModeComponent },
  { path: "manage", component: ManageCocktailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
