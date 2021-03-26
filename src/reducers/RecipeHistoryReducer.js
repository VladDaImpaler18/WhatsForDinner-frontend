const RecipeReducer = (state={ ingredient: '', recipes: [], loading: false }, action) =>{
    switch (action.type) {
        case 'START_SEARCH_RECIPES_REQUEST':
            return {...state, ingredient: state.ingredient, recipes: state.recipes, loading: true};
    
        case 'ADD_RECIPE':
            return {...state, recipes: state.recipes.concat(action.recipe), loading: false};

        case 'ADD_RECIPES_BATCH':
            return {...state, recipes: action.recipes, loading: false};

        case 'CLEAR_ALL': return {...state, ingredient: '', recipes: [], loading: false};

        case 'SELECT_RECIPE':
            debugger
            return {...state, loading: false}
        
        case 'SELECT_INGREDIENT':
            return {...state, ingredient: action.ingredient}

        case 'DELETE_RECIPE':
            debugger
            return {...state, recipes: state.recipes.filter(r => r !== action.recipe), loading: false };
        
        default: return state;
    }
}
export default RecipeReducer