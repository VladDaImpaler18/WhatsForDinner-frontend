const initialState = { recipes: [], loading: false};
const RecipeReducer = (state, action) =>{
    debugger //check exactly how action is structured
    switch (action) {
        case 'LOADING_HISTORY':
            return {...state,  recipes: [...state.recipes], loading:true};
        case 'ADD_RECIPE':
            return {...state, recipes: state.recipes.concat(action.recipe), loading: false};
        case 'CLEAR_HISTORY': return {...state, recipes: [], loading: false};
        case 'SELECT_RECIPE':
            debugger
            return {...state, loading: false}
        case 'DELETE_RECIPE':
            return {...state, recipes: state.recipes.filter(r => r !== action.recipe), loading: false };
    }
}
/* Legacy Way
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
*/
export default RecipeReducer