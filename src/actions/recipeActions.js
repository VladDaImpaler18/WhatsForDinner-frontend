  //maybe not used
  //fetchHistory
  const fetchHistory = () => { 
    return(dispatch) => {
    dispatch({ type: 'LOADING_DATA' });
    fetch('http://localhost:3001/cookbook')
         .then(response => response.json())
         .then(recipeData => {
             dispatch({ type: 'ADD_RECIPE', recipes: recipeData })
          })
    };
  }
  //selectRecipe

  //addRecipe

  //deleteHistory

  //clearHistory

  //Search TheMealsDB.com