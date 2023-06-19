import { Category } from "./category.model";
import { Ingredient } from "./ingredient.model";

export class Cocktail {
    constructor(
        public label: string,
        public ingredientList: Ingredient[],
        public category?: Category,
        public id?: number
    ){}
}