import React from 'react'
import "./Recipe.css"
import { useDispatch } from 'react-redux'


const Recipe = (props) => {
    const str = props.recipe.thumb.split("/");
    const imageName = str[str.length-1];
    const imageLocation = "/img/".concat(imageName);
    const dispatch = useDispatch()

    return (
        <div className="container-recipe">
            <img src={imageLocation} alt="Thumbnail" />
            <p>{props.recipe.title}</p>
            <button onClick={() => dispatch({ type: 'DELETE_RECIPE', recipe: props.recipe }) }>X</button>
        </div>
    )
}

export default Recipe;

/*
Recipie(name, URL, image, description, story, ingredients [],
         directions [], review, notes, createDate, updateDate)

        "title": "",
        "thumb": "/sbx7n71587673021.jpg",
        "id": "6"
      },
*/