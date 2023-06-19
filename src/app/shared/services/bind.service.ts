import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Cocktail } from "../models/cocktail.model";
import { environment } from "src/environments/environment.development";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class BindService{
    
    constructor(private http: HttpClient){}

    bind(ingredientId: number, cocktailId: number): Observable<Cocktail>{
        const url: string = `${environment.apiUrl}${environment.endpoints.bindCocktail}${cocktailId}${environment.endpoints.bindIngredient}${ingredientId}`
        return this.http.get<Cocktail>(url)
    }
  }