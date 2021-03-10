import React, {useState} from 'react'

function SearchForm(props) {
    const [ingredient, setIngredient] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleOnSubmit
    }
    
    const handleChange = (e) => {
        setIngredient(e.target.value)
    }

    return (
        <div>
            <label>Primary Ingredient: </label>
            <input onChange={handleChange} />
        </div>
    )
}