import React, {useState} from 'react'

function SearchForm(props) {
    const [value, setValue] = useState('')

    return (
        <div>
            <lable>Primary Ingredient: </lable>
            <input type='text' value={value} onChange={ (e)=>setValue(e.target.value) }>
            
            
            </input>
            <button>Search!</button>
        </div>
    )
}

export default SearchForm
