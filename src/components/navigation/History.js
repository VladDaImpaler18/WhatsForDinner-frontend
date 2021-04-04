import React, {useState, useEffect} from 'react'
import jsondata from '../../.cache/recipeData'

import { FixedSizeList as List } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";

import "./History.css";

function History(){
//component did mount fetch user's history from backend
/*****local state***** after fetching
ingredients: [ingredient1, ..., ingredientN]
selection: null
recipes: [] (length = 0)
*/
let initialState = ["chicken", "beef", "tofu", "corn", "broccoli"]
    const [ingredients, setIngredients] = useState(initialState)

    //{data, index, style}
    const row = ({index, style}) => {
        //maybe show some thumbnails of included recipes.
        return(
        <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
            {ingredients[index]}
        </div>
    )}
    
    return(
        <>
        <p>Cookbook history</p>
            <AutoSizer>
              {({height, width}) => (
                <List 
                  className="List"
                  height={height}
                  itemCount={ingredients.length}
                  itemSize={35}
                  width={width}
                >
                  {row}
                </List>
            )
              }
            </AutoSizer>
        </>
    )
}

export default History