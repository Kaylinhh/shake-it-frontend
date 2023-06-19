export const environment: {
    production: boolean;
    apiUrl: string;
    endpoints: {
        getIngredients: string;
        addIngredient: string;
        updateIngredient: string;
        deleteIngredient: string;
        getCocktails: string;
        addCocktail: string;
        updateCocktail: string;
        deleteCocktail: string;
        bindCocktail: string;
        bindIngredient: string
    };
} = {
    production: false,
    apiUrl: 'http://localhost:8080/',
    endpoints: {
        getIngredients: 'ingredients',
        addIngredient: 'ingredients/add',
        updateIngredient: 'ingredients/update/',
        deleteIngredient: 'ingredients/delete/',
        getCocktails: 'cocktails',
        addCocktail: 'cocktails/add',
        updateCocktail: 'cocktails/update/',
        deleteCocktail: 'cocktails/delete/',
        bindCocktail: 'bind/cocktailId=',
        bindIngredient: '/ingredientId='
    }
}