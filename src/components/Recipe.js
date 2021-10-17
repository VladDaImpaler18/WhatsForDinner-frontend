import React from 'react'
//hash={"Icing Sugar": "1 tbs", "Olive Oil": "1 cup", "Sesame Seed Burger Buns": "1", "Salt": "1/2 tsp"}
function Recipe({recipe}) {
    const listIngredients = ({ingredients}) => { 
        Object.keys(ingredients).map(i=>console.log(i+"this is:"+this),ingredients)
    } //take the ingredients, do a UL, print each thing as a list
    return (
        <div>
            <img src={recipe.thumb} alt="Picture" />
            <h2>{recipe.title}</h2>
            <h4>Category: {recipe.category}</h4>
            <h4>Ingredients:</h4>
        </div>
    )
}
export default Recipe

// id, title, drinkAlternate (null), category (ingedient), area, instructions (long),
// thumbnail, tags (null), youtube link, Ingredients_Hash{ingredient: quantity}, source link, image source

//can find Ingredients count by counting keys in hash