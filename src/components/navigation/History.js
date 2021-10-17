import React, {useState, useEffect} from 'react'
import historyData from "../../.cache/historyData"; //for testing

import { FixedSizeList as List } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";

import "./History.css";

function History(){
//component did mount fetch user's history from backend
/*****local state***** after fetching
ingredients: [ingredient1, ..., ingredientN]
selection: null //when this is set, changes output to expand on recipes that their recipe.category === selection
recipes: [..., ..., ..., ...] (length = 4)
*/
    const [categories, setCategories] = useState([])
    const [selection, setSelection] = useState('')

    //{data, index, style}
    const row = ({index, style}) => {
        //maybe show some thumbnails of included recipes.
        //make each ingredient div clickable
        return(
          
        <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
            {categories[index]}
        </div>
    )}

    function getUniqueCategories(recipesArr){
      let categories = recipesArr.map(({category}) => category);
      setCategories([... new Set(categories)])
    }

    useEffect(() => {
      getUniqueCategories(historyData)
      return () => {
        
      }
    }, [])
    return(
        <>
        <p>Cookbook history</p>
            <AutoSizer>
              {({height, width}) => (
                <List 
                  className="List"
                  height={height}
                  itemCount={categories.length}
                  itemSize={50}
                  width={width / 2}
                >
                  {row}
                </List>
            )}
            </AutoSizer>
        </>
    )
}

export default History