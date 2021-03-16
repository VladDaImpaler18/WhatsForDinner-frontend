import React from 'react'
import "./Recipe.css"

const Recipe = props => {
    const str = props.thumb.split("/");
    const imageName = str[str.length-1];
    const imageLocation = "../../images/".concat(imageName);

    return (
        <div key={props.id} class="recipe">
            <img src={imageLocation} alt="Thumbnail" />
            <p>{props.title}</p>
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