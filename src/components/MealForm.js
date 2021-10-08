// import React, {useState} from 'react'

function mealForm(props){
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
        
        setValue('')
    }

    return(
        <form onSubmit={this.handleOnSubmit}>
            <label> Title </label>
            <input type='text' name="title" value={title} onChange={ (e) => setTitle(e.target.value) } />

            <label> Category:  </label>
            <input type='text' name="category" value={category} onChange={ (e) => setCategory(e.target.value) }/>
            
            <label> Ingredients: </label>
            {ingredients.length===0 ? 
                <>
                <input type='text' name="ingredients[0]" value="" onChange={ (e) => setIngredients( ingredients => [...ingredients, e.target.value]) } />
                </>
                :
                <>
                {ingredients.map( (ingredient, i) => 
                <input type='text' name={`ingredients[${i}]`} value={ingredient} onChange={ (e) => setIngredients( ingredients => [...ingredients, e.target.value]) }/>
                )}
                </>
            }
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

            <label> Source: </label>
            <input type='text' name="source" value={source} onChange={ (e) => setSource(e.target.value) } />


            <input type="submit" value="Add Meal" />
        </form>
    )
}

export default mealForm