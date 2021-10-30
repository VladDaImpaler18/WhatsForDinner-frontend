import { IMPORT_MEAL_REQUEST, IMPORT_MEAL_SUCCESS, IMPORT_MEAL_FAIL, CREATE_MEAL_REQUEST, CREATE_MEAL_SUCCESS, CREATE_MEAL_FAIL } from "../constants/action-type";
let meal = {title: '',  category: '', ingredients:[], instructions: [], tags: [], source: ''}

const MealReducer = (state={ meal, loading: false, err:'' }, action) =>{
    switch (action.type) {
        case IMPORT_MEAL_REQUEST:
            return {...state, loading: true}
            
        case IMPORT_MEAL_SUCCESS:
            meal = action.payload
            debugger
            return {...state, meal, loading: false}
        
        case IMPORT_MEAL_FAIL:
            err = action.payload
            return {...state, loading: false}

        case CREATE_MEAL_REQUEST:
            return {...state, loading: true}

        case CREATE_MEAL_SUCCESS:
            meal = action.payload
            return {...state, meal, loading: false}

        case CREATE_MEAL_FAIL:
            err = action.payload
            return {...state, err, loading: false}

        case "@@INIT":

        default: return state;
    }
}
export default MealReducer