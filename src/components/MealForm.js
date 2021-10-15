import React, {useState} from 'react'

function MealForm(props){
    // Meal states
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [ingredients, setIngredients] = useState([])
    const [instructions, setInstructions] = useState([])
    const [tags, setTags] = useState([])
    const [source, setSource] = useState('')

    // handed down from component
    const handleOnSubmit = (e) => {
        e.preventDefault()
        debugger
        
    }

    const handleOnChange = (e) => {
        const [label, index] = e.target.name.split(/\[(\d)\]/)
        switch(label) {
            case "ingredients":
                return setIngredients(ingredients => [...ingredients, ingredients[index] = e.target.value])
                // debugger
            case "instructions":
                return setInstructions(instructions => [...instructions, instructions[index] = e.target.value])
            case "tags":
                return setTags(tags => [...tags, tags[index] = e.target.value])

        }
    }

    return(
        <form onSubmit={handleOnSubmit}>
            <label> Title </label>
            <input type='text' name="title" value={title} onChange={ (e) => setTitle(e.target.value) } />
            <br/>
            <label> Category:  </label>
            <input type='text' name="category" value={category} onChange={ (e) => setCategory(e.target.value) }/>
            <br/>
            <label> Ingredients: </label>
            {ingredients.length===0 ? 
                <>
                <input type='text' name="ingredients[0]" key="ingredients[0]" value="" onChange={ handleOnChange } />
                </>
                :
                <>
                {ingredients.map( (ingredient, i) => 
                <input type='text' name={`ingredients[${i}]`} key={`ingredients[${i}]`} value={ingredient} onChange={ (e) => setIngredients( ingredients => [...ingredients, e.target.value]) }/>
                )}
                </>
            }
            <br/>
            <label> Instructions: </label>
            {instructions.length===0 ?
                <>
                <input type='text' name='instructions[0]' value="" onChange={ (e) => setInstructions( instructions => [...instructions, e.target.value]) } />
                </>
                :
                <>
                {instructions.map( (instruction, i) =>
                <input type='text' name={`instructions[${i}]`} value={instruction} onChange={ (e)=> setInstructions( instructions => [...instructions, e.target.value]) } />
                )}
                </>
            }
            <br/>
            <label> Tags: </label>
            {tags.length===0 ?
                <>
                <input type='text' name='tags[0]' value="" onChange={ (e) => setTags( tags => [...tags, e.target.value]) } />
                </>
                :
                <>
                {tags.map( (tag, i) =>
                <input type='text' name={`tags[${i}]`} value={tag} onChange={ (e)=> setTags( tags => [...tags, e.target.value]) } />
                )}
                </>
            }
            <br/>
            <label> Source: </label>
            <input type='text' name="source" value={source} onChange={ (e) => setSource(e.target.value) } />

            <br/>
            <input type="submit" value="Add Meal" />
        </form>
    )
}

export default MealForm