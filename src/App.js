import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import SearchForm from './components/SearchForm';
import SearchResults from './containers/SearchResults';
import './App.css';


function App() {
  const recipes = useSelector(state => state.recipes)
  const ingredient = useSelector(state => state.ingredient)
  const dispatch = useDispatch()
  
  //fetchRecipes(ingredient) sends a request to the backend, to figure out all the recipes for ingredient.
  //backend returns cookbook. Cookbook[ingredient] = recipes hash
  function fetchRecipes(ingredient){
    const userID = 1 //for testing purposes only, placeholder for user ID
    return (dispatch) => {
      dispatch( {type: 'START_SEARCH_RECIPES_REQUEST' });
      fetch(`http://localhost:3001/${userID}/cookbook/${ingredient}`)
      .then(response => response.json())
      .then(cookbook => {
        dispatch({ type: 'ADD_RECIPES_BATCH', recipes: cookbook[ingredient]}) //this or do a map function and do loop of add_recipe  
      })
    }
  }

  const selectIngredient = (i) => dispatch({ type: 'SELECT_INGREDIENT', ingredient: i })//Here 
  
    useEffect(() => {

    return () => {
      dispatch( { type: 'CLEAR_ALL' })
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Landing Page!</h1>
      </header>
      
      <div style={{ width: 400 }}>
          <SearchForm handleIngredient={ selectIngredient } />
          { ingredient ? <SearchResults recipes={ recipes } ingredient = { ingredient } /> : null }
      </div>

    </div>
  );
}

export default App;
