import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoryModeComponent } from './story-mode/story-mode.component';
import { ArcadeModeComponent } from './arcade-mode/arcade-mode.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PrimengModule } from './shared/primeng.module';
import { HttpClientModule } from '@angular/common/http';
import { ManageCocktailComponent } from './manage-cocktail/manage-cocktail.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    StoryModeComponent,
    ArcadeModeComponent,
    HeaderComponent,
    HomeComponent,
    ManageCocktailComponent,
    EditDialogComponent,
    DeleteDialogComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    PrimengModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
