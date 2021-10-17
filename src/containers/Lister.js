import React from 'react'
//takes in props, recipes and categories (unique only)
//makes list with categories

//create div with text of category, clickable. When clicked it expands showing recipes in category
//recipes.filter( (recipe)=>recipe.category===selectionState )
//recipes are displayed using RecipeSmall



function Lister({recipes}) {
    let meals = {}
    recipes.forEach( recipe => meals[recipe.category] ? meals[recipe.category].push(recipe) : meals[recipe.category]=[recipe])
    const print = () => meals.keys.map( ingredient => {
        <h3>{ingredient}</h3>
        {meals[ingredient].forEach(recipe => <RecipeSmall recipe={recipe} />)}
    }
    )
    return (
        <div>
            {print}
        </div>
    )
}

export default Lister;