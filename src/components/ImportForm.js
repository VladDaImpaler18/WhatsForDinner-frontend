import React, {useState} from 'react'

function ImportForm(props) {
    const [url, setURL] = useState('')

    const fetchData = (e) =>{
        e.preventDefault()
        let meal = {}
        meal.source = url
        props.handleImport(meal)
    }
    return (
        <form onSubmit={fetchData}>
            <label>URL:</label>
            <input type='text' name='url' value={url} onChange={ (e) => setURL(e.target.value) } />
            <input type="submit" value="Import Meal"/>
        </form>
    )
}

export default ImportForm