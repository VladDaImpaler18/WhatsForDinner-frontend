import React from 'react'
import "./RecipeSmall.css"
import { useDispatch } from 'react-redux'


const RecipeSmall = (props) => {
    const str = props.recipe.thumb.split("/");
    const imageName = str[str.length-1];
    const imageLocation = "/img/".concat(imageName);
    const dispatch = useDispatch() //() => dispatch({ type: 'SELECT_RECIPE', recipe: props.recipe})

    return (
        <div className="container-recipe" onClick={ () => console.log(`This is where i'd get recipe with ID: ${props.recipe.id}`) }>
            <img src={imageLocation} alt="Thumbnail" />
            <p>{props.recipe.title}</p>
            <button onClick={() => dispatch({ type: 'DELETE_RECIPE', recipe: props.recipe }) }>X</button>
        </div>
    )
}

export default RecipeSmall;

/*
Recipie(name, URL, image, description, story, ingredients [],
         directions [], review, notes, createDate, updateDate)

        "title": "",
        "thumb": "/sbx7n71587673021.jpg",
        "id": "6"
      },
*/