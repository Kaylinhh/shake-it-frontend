import { Ingredient } from './../models/ingredient.model';
import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "src/environments/environment.development";


@Injectable({
    providedIn: 'root'
  })
  export class IngredientService {

    //private _ingredientList$: BehaviorSubject<Ingredient[]> = new BehaviorSubject<Ingredient[]>([]);

    constructor(private http: HttpClient){}

    getAll(): Observable<Ingredient[]> {
        const url: string = `${environment.apiUrl}${environment.endpoints.getIngredients}`
        return this.http.get<Ingredient[]>(url)
    }

    create(ingredient: Ingredient): Observable<Ingredient> {
        const url: string = `${environment.apiUrl}${environment.endpoints.addIngredient}`
        return this.http.post<Ingredient>(url, ingredient)
    }

    update(id: number, ingredient: Ingredient): void {
        const url: string = `${environment.apiUrl}${environment.endpoints.updateIngredient}${id}`
        this.http.put(url, ingredient)
    }

    delete(id: number): void {
        const url: string = `${environment.apiUrl}${environment.endpoints.deleteIngredient}${id}`
        this.http.delete(url)
    }
    
  }