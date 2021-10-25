import React, {useState} from 'react'
import { importMeal } from '../actions/mealActions'

function ImportForm(props) {
    const [url, setURL] = useState('')

    return (
        <form onSubmit={props.handleImport}>
            <label>URL:</label>
            <input type='text' name='url' value={url} onChange={ (e) => setURL(e.target.value) } />
            <input type="submit" value="Import Meal"/>
        </form>
    )
}

export default ImportForm