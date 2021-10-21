import { IMPORT_MEAL_REQUEST, IMPORT_MEAL_SUCCESS, IMPORT_MEAL_FAIL, CREATE_MEAL_REQUEST, CREATE_MEAL_SUCCESS, CREATE_MEAL_FAIL } from "../constants/action-type";
let meal = {title: '',  category: '', ingredients:[], instructions: [], tags: [], source: ''}

const MealReducer = (state={ meal, loading: false, err:'' }, action) =>{
    switch (action.type) {
        case IMPORT_MEAL_REQUEST:
            return {...state, loading: true}
            
        case IMPORT_MEAL_SUCCESS:
            debugger
            return {...state, loading: false}
        
        case IMPORT_MEAL_FAIL:
            return {...state, loading: false}

        case CREATE_MEAL_REQUEST:
            debugger
            return {...state, loading: true}

        case CREATE_MEAL_SUCCESS:
            debugger
            return {...state, loading: false}

        case CREATE_MEAL_FAIL:
            return {...state, loading: false}

        default: return state;
    }
}
export default MealReducer