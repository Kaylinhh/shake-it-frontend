import { Ingredient } from "./ingredient.model";

export class Cocktail {
    constructor(
        public id: string,
        public label: string,
        public ingredients: Ingredient[]

    ){}
}