import React from 'react'
import "./Recipe.css"

const Recipe = ({recipe}) => {
    const str = recipe.thumb.split("/");
    const imageName = str[str.length-1];
    const imageLocation = "/img/".concat(imageName);
    return (
        <div key={recipe.id} class="container-recipe">
            <img src={imageLocation} alt="Thumbnail" />
            <p>{recipe.title}</p>
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