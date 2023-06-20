import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Cocktail } from "../models/cocktail.model"
import {BehaviorSubject, Observable, catchError, throwError} from "rxjs";
import { environment } from "src/environments/environment.development";

@Injectable({
    providedIn: 'root'
  })
  export class CocktailService {

    //private _cocktailList$: BehaviorSubject<Ingredient[]> = new BehaviorSubject<Ingredient[]>([]);

    constructor(private http: HttpClient){}

    getAll(): Observable<Cocktail[]> {
        const url: string = `${environment.apiUrl}${environment.endpoints.getCocktails}`
        return this.http.get<Cocktail[]>(url)
    }

    create(cocktail: Cocktail): Observable<Cocktail> {
        const url: string = `${environment.apiUrl}${environment.endpoints.addCocktail}`
        return this.http.post<Cocktail>(url, cocktail)
    }

    update(id: number, cocktail: Cocktail): void {
        const url: string = `${environment.apiUrl}${environment.endpoints.updateCocktail}${id}`
        this.http.put(url, cocktail)
    }

    delete(id: number): void {
        const url: string = `${environment.apiUrl}${environment.endpoints.deleteCocktail}${id}`
        this.http.delete(url)  .subscribe((): void => {
            this.getAll().subscribe()
        })
    }  }