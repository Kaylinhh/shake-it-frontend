export const environment: {
    production: boolean;
    apiUrl: string;
    endpoints: {
        getIngredients: string;
        getCocktails: string;
    };
} = {
    production: false,
    apiUrl: 'http://localhost:8080/',
    endpoints: {
        getIngredients: 'ingredients',
        getCocktails: 'cocktails'
    }
}