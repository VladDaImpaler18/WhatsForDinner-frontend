import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import SearchForm from './components/SearchForm';
import SearchResults from './containers/SearchResults';
import './App.css';

//make this page a landing home page? The layou needs to fleshed out more

function App() {
  const recipes = useSelector(state => state.recipes)
  const ingredient = useSelector(state => state.ingredient)
  const dispatch = useDispatch()

  //for testing
  const loadTestData = () =>{ //this is totally an action!
    const json = "{\"chicken\":[{\"title\":\"Chick-Fil-A Sandwich\",\"thumb\":\"https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg\",\"id\":\"53016\"},{\"title\":\"Chicken Couscous\",\"thumb\":\"https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg\",\"id\":\"52850\"},{\"title\":\"Chicken Fajita Mac and Cheese\",\"thumb\":\"https://www.themealdb.com/images/media/meals/qrqywr1503066605.jpg\",\"id\":\"52818\"},{\"title\":\"Chicken Ham and Leek Pie\",\"thumb\":\"https://www.themealdb.com/images/media/meals/xrrtss1511555269.jpg\",\"id\":\"52875\"},{\"title\":\"Chicken Quinoa Greek Salad\",\"thumb\":\"https://www.themealdb.com/images/media/meals/k29viq1585565980.jpg\",\"id\":\"53011\"},{\"title\":\"General Tso's Chicken\",\"thumb\":\"https://www.themealdb.com/images/media/meals/1529444113.jpg\",\"id\":\"52951\"},{\"title\":\"Honey Balsamic Chicken with Crispy Broccoli & Potatoes\",\"thumb\":\"https://www.themealdb.com/images/media/meals/kvbotn1581012881.jpg\",\"id\":\"52993\"},{\"title\":\"Katsu Chicken curry\",\"thumb\":\"https://www.themealdb.com/images/media/meals/vwrpps1503068729.jpg\",\"id\":\"52820\"},{\"title\":\"Rappie Pie\",\"thumb\":\"https://www.themealdb.com/images/media/meals/ruwpww1511817242.jpg\",\"id\":\"52933\"}]}"
    let ingredient = Object.keys(JSON.parse(json))[0] //for now
    let recipes = JSON.parse(json)[ingredient];
    dispatch({ type: 'SELECT_INGREDIENT', ingredient})
    recipes.forEach( recipe => dispatch({ type: 'ADD_RECIPE', recipe }))
  }

  //http://localhost:3001/${userID}/cookbook/ //all recipes in user's cookbook
  //http://localhost:3001/${userID}/cookbook/${ingredient}/ //all recipes in user's cookbook for ingredient X
  //http://localhost:3001/recipe/${recipe.UID} //individual recipe information
  
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
    loadTestData()
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
