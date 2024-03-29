import { IMPORT_MEAL_REQUEST, IMPORT_MEAL_SUCCESS, IMPORT_MEAL_FAIL, CREATE_MEAL_REQUEST, CREATE_MEAL_SUCCESS, CREATE_MEAL_FAIL } from "../constants/action-type";
  const baseURL = "http://127.0.0.1:3001"

  export const importMeal = (meal) => { 
    return(dispatch) => {
      let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(meal)

      };
    dispatch({ type: IMPORT_MEAL_REQUEST });
    fetch(`${baseURL}/meals/import`, configObj)
         .then(response => response.json())
         .then(mealData => {
           console.log("Imported meal data...")
             return dispatch({ type: IMPORT_MEAL_SUCCESS, payload: mealData })
          })
         .catch(err => dispatch({ type: IMPORT_MEAL_FAIL, payload: err })); 
    };
  }

  export const addMeal = (meal) => {
    return (dispatch) => {
      let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(meal)
      };
      dispatch( { type: CREATE_MEAL_REQUEST });
      fetch(`${baseURL}/meals/new`, configObj)
        .then(response => response.json())
        .then(mealData => {
          console.log("Meal added...")
          return dispatch({ type: CREATE_MEAL_SUCCESS, payload: mealData })
        })
        .catch(err => dispatch({ type: CREATE_MEAL_FAIL, payload: err }));
    };
  }
  

  //selectMeal
  

  //deleteMeal

  