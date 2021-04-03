import React from 'react'
import "./SearchResults.css"
import Recipe from '../components/Recipe';
//uses the results from SearchForm

//from the props, loop through and display each item individually
//props.recipes
function SearchResults(props){
    let listRecipes = props.recipes.map(recipe => <Recipe key={recipe.id} recipe={ recipe } />)
    //recipe on click leads to specific recipe page. can send fetch request with ID.
    return(
        <div className="container-root">
            <p>Search results for: { props.ingredient }</p>
           { props.recipes.loading ? "Loading...": listRecipes }
        </div>
    )
}

export default SearchResults