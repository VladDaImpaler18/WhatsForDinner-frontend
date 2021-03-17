import React, { useState } from 'react'
import "./SearchResults.css"
import Recipe from '../components/Recipe';
//uses the results from SearchForm

//from the props, loop through and display each item individually
//props.recipes
function SearchResults(props){

    let ingredient = Object.keys(props.recipes)[0] //for now
    let recipes = props.recipes[ingredient];
    const listRecipes = recipes.map(recipe => <Recipe recipe={ recipe } />);
    return(
        <div className="container-root">
            {  }
        </div>
    )
}

export default SearchResults