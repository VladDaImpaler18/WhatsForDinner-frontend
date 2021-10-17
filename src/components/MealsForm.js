import React, { useState } from 'react';


function MealsForm() {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [area, setArea] = useState('');
    const [source, setSource] = useState('');
    const [instructions, setInstructions] = useState([]);
    const [tags, setTags] = useState([]);
    const [ingredients, setIngredients] = useState({});

    const handleOnSubmit = (e) => {
        e.preventDefault()

        setValue('')
    }
    
    return (
        <form onSubmit={handleOnSubmit}>
            <label>ID: </label>
            <input type='text' value={id} disabled />
            <label>Title: </label>
            <input type='text' value={title} onChange={ (e)=>setTitle(e.target.value) } />
            <label>Category: </label>
            <input type='text' value={category} onChange={ (e)=>setCategory(e.target.value) } />
            <label>Area: </label>
            <input type='text' value={area} onChange={ (e)=>setArea(e.target.value) } />
            <label>Source: </label>
            <input type='text' value={source} onChange={ (e)=>setSource(e.target.value) } />
            <label>Ingredients</label>
            
            <label>Instructions: </label>

            <label>Tags</label>

        </form>
    )
}
export default MealsForm;