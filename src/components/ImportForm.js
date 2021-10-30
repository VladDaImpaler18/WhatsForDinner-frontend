import React, {useState} from 'react'

function ImportForm(props) {
    const [url, setURL] = useState('')

    const fetchData = (e) =>{
        e.preventDefault()
        props.handleImport(url)
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