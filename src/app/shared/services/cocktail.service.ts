import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Cocktail } from "../models/cocktail.model"
import {BehaviorSubject, Observable, catchError, throwError} from "rxjs";
import { environment } from "src/environments/environment.development";

@Injectable({
    providedIn: 'root'
  })
  export class CocktailService {

    private _cocktailList$: BehaviorSubject<Cocktail[]> = new BehaviorSubject<Cocktail[]>([]);

    constructor(private http: HttpClient){}

    getAll(): Observable<Cocktail[]> {
        const url: string = `${environment.apiUrl}${environment.endpoints.getCocktails}`
        this.http.get<Cocktail[]>(url).subscribe(cocktail => {
            this._cocktailList$.next(cocktail as Cocktail[])
        })
        return this._cocktailList$.asObservable()
    }


    create(cocktail: Cocktail): Observable<Cocktail> {
        const url: string = `${environment.apiUrl}${environment.endpoints.addCocktail}`
        return this.http.post<Cocktail>(url, cocktail)
    }

    update(id: number, cocktail: Cocktail): void {
        const url: string = `${environment.apiUrl}${environment.endpoints.updateCocktail}${id}`
        this.http.put(url, cocktail).subscribe((): void => {
            this.getAll().subscribe()
        })
    }

    delete(id: number): void {
        const url: string = `${environment.apiUrl}${environment.endpoints.deleteCocktail}${id}`
        this.http.delete(url).subscribe((): void => {
            this.getAll().subscribe()
        })
    }  }