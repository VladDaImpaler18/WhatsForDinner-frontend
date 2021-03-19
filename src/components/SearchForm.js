import React, {useState} from 'react'

function SearchForm(props) {
    const [value, setValue] = useState('')

    const handleOnSubmit = (e) => {
        e.preventdefault()
        

    }
    return (
        <div>
            <label>Primary Ingredient: </label>
            <input type='text' value={value} onChange={ (e)=>setValue(e.target.value) } onSubmit={handleOnSubmit}>
            
            
            </input>
            <button>Search!</button>
        </div>
    )
}

export default SearchForm
