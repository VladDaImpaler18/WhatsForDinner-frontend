import React, {useState, useEffect} from 'react'
import jsondata from '../../.cache/recipeData'

function History(){
//component did mount fetch user's history from backend
/*****local state***** after fetching
ingredients: [ingredient1, ..., ingredientN]
selection: null
recipes: [] (length = 0)
*/
let initialState = ["chicken", "beef", "tofu", "corn", "broccoli", ]
    const [ingredients, setingredients] = useState(initialState)
debugger
    return(
        <>
            <ul>
                {ingredients.map(ingredient => {
                    <li key={ingredient.id}>
                        {ingredient}
                    </li>
                })}
            </ul>
        </>
    )
}

export default History