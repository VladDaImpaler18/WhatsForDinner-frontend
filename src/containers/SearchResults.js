import React from 'react'
import "./SearchResults.css"
import Recipe from '../components/Recipe';
//uses the results from SearchForm

//from the props, loop through and display each item individually
//props.recipes
function SearchResults(props){

    const handleOnClick = (e) => {
        debugger // delete this container by removing from state
    }
    let recipes = props.recipes.recipes; // it's in the reducer, which contains: recipes and loading
    let listRecipes = recipes.map(recipe => <Recipe recipe={ recipe } />)
    
    return(
        <div className="container-root">
           {listRecipes}
        </div>
    )
}

export default SearchResults