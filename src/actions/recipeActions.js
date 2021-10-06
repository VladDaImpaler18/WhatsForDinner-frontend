import { FETCH_MEAL_REQUEST, FETCH_MEAL_SUCCESS, FETCH_MEAL_FAIL } from "../constants/action-type";
  const baseURL = "http://localhost:3000"

  const importMeal = (url) => { 
    return(dispatch) => {
      let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(url)

      };
    dispatch({ type: FETCH_MEAL_REQUEST });
    fetch(`${baseURL}/meals/import`, configObj)
         .then(response => response.json())
         .then(mealData => {
             dispatch({ type: FETCH_MEAL_SUCCESS, payload: mealData })
          })
         .catch(err => dispatch({ type: FETCH_MEAL_FAIL, payload: err })); 
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
      fetch(`${baseURL}`)
    };
  }

  //selectMeal
  

  //addMeal

  //deleteMeal

  