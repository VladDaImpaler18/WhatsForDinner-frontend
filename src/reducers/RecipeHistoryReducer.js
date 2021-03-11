function RecipeReducer(state = { ingredient: '', loading: false }, action) {
    switch (action.type) {
        case 'LOADING_HISTORY':
            return {
                ...state,
                ingredient: [...state.ingredient],
                loading: true
            }
        
        case 'ADD_RECIPE':
            return {
                ...state,
                ingredient = state.ingredient.concat(action.ingredient),
                loading: false
            }
        
        case 'CLEAR_HISTORY':
            return {
                ...state,
                ingredient: '',
                loading: false
            }
        default:
            return state;
    }
}
export default RecipeReducer