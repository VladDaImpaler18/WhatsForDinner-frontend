import React, {useState} from 'react'

function SearchForm(props) {
    const [value, setValue] = useState('')

    const handleOnSubmit = (e) => {
        e.preventDefault()
        debugger
        props.handleIngredient(value) //do th e fetch function that has been passed as prop
        setValue('')
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <label>Primary Ingredient: </label>
            <input type='text' value={value} onChange={ (e)=>setValue(e.target.value) }>
            
            
            </input>
            <button> Search! </button>
        </form>
    )
}

export default SearchForm
