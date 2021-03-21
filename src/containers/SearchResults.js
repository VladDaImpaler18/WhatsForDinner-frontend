import React from 'react'
import "./SearchResults.css"
import Recipe from '../components/Recipe';
//uses the results from SearchForm

//from the props, loop through and display each item individually
//props.recipes
function SearchResults(props){
    let listRecipes = props.recipes.map(recipe => <Recipe key={recipe.id} recipe={ recipe } />)
    
    return(
        <div className="container-root">
            <p>Search results for: { props.ingredient }</p>
           { props.recipes.loading ? "Loading...": listRecipes }
        </div>
    )
}

export default SearchResults