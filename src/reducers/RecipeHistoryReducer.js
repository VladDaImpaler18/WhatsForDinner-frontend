function RecipeReducer(state = { recipe: '', loading: false }, action) {
    switch (action.type) {
        case 'LOADING_HISTORY':
            return {
                ...state,
                recipe: [...state.recipe],
                loading: true
            }
        
        case 'ADD_RECIPE':
            return {
                ...state,
                recipe: state.recipe.concat(action.recipe),
                loading: false
            }
        
        case 'CLEAR_HISTORY':
            return {
                ...state,
                recipe: '',
                loading: false
            }

        case 'SELECT_RECIPE':
            debugger
            return {
                ...state,
                loading: false,
            }
        
        case 'DELETE_RECIPE':
            return {
                ...state,
                recipe: state.recipe.filter(r => r !== action.recipe),
                loading: false
            }
        default:
            return state;
    }
}
export default RecipeReducer