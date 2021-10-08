import { IMPORT_MEAL_REQUEST, IMPORT_MEAL_SUCCESS, IMPORT_MEAL_FAIL, CREATE_MEAL_REQUEST, CREATE_MEAL_SUCCESS, CREATE_MEAL_FAIL } from "../constants/action-type";
  const baseURL = "http://localhost:3000"

  const importMeal = (url) => { 
    debugger;
    return(dispatch) => {
      let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(url)

      };
    dispatch({ type: IMPORT_MEAL_REQUEST });
    fetch(`${baseURL}/meals/import`, configObj)
         .then(response => response.json())
         .then(mealData => {
             dispatch({ type: IMPORT_MEAL_SUCCESS, payload: mealData })
          })
         .catch(err => dispatch({ type: IMPORT_MEAL_FAIL, payload: err })); 
    };
  }

  const addMeal = (meal) => {
    return(dispatch) => {
      let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(meal)
      };
      dispatch( { type: CREATE_MEAL_REQUEST });
      fetch(`${baseURL}/meals`, configObj)
        .then(response => response.json())
        .then(mealData => {
          dispatch({ type: CREATE_MEAL_SUCCESS, payload: mealData })
        })
        .catch(err => dispatch({ type: CREATE_MEAL_FAIL, payload: err }));
    };
  }

  //selectMeal
  

  //deleteMeal

  