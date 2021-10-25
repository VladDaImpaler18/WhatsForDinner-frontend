import React, {useState} from 'react'
import { addMeal } from '../actions/mealActions'
import {useSelector, useDispatch } from 'react-redux'
import {useEffect} from 'react'

function MealForm(props){
    // Meal states
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [ingredients, setIngredients] = useState(['','',''])
    const [instructions, setInstructions] = useState(['','',''])
    const [tags, setTags] = useState([''])
    const [source, setSource] = useState('')

    // handed down from component
    const handleOnSubmit = (e) => {
        e.preventDefault()
        let meal = {title, category, ingredients, instructions, tags, source}
        
        addMeal(meal)
        // setTitle('')
        // setCategory('')
        // setIngredients(['','',''])
        // setInstructions(['','',''])
        // setTags([''])
        // setSource('')
        
    }


    const handleOnClick = (e) => {
        const button_action = e.target.name
        switch(button_action) {
            case "add ingredients": 
                if(ingredients[ingredients.length-1] !== '')
                    return setIngredients([...ingredients, ''])
                else{
                    let ingredientsDiv = Array.from(e.target.parentElement.children)
                    let numOfIngredients = e.target.parentElement.childElementCount-1
                    ingredientsDiv.filter(element => element.type === "text" && element.value === "").forEach(element => { 
                        element.setAttribute("placeholder","Must be filled in")//last one should show this, any missing ones inbetween elements shifted.
                    })
                    break;
                }

            case "add instructions":
                if(instructions[instructions.length-1] !== '')
                    return setInstructions([...instructions,''])
                else {
                    let instructionsDiv = Array.from(e.target.parentElement.children)
                    instructionsDiv.filter(element => element.type === "text" && element.value === "").forEach(element => { 
                        element.setAttribute("placeholder","Must be filled in")//last one should show this, any missing ones inbetween elements shifted.
                    })
                    break;
                }

            case "add tags":
                return setTags([...tags,''])

            default: return 0
        }
    }

    const handleOnChange = (e) => {
        const [label, index] = e.target.name.split(/\[(\d)\]/)
        switch(label) {
            case "ingredients":
                let newIngredientsArray = [...ingredients]
                newIngredientsArray[index]=e.target.value
                return setIngredients(newIngredientsArray)
            case "instructions":
                let newInstructionsArray = [...instructions]
                newInstructionsArray[index] = e.target.value
                return setInstructions(newInstructionsArray)
            case "tags":
                let newTagsArray = [...tags]
                newTagsArray[index] = e.target.value
                return setTags(newTagsArray)

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
            <div name="ingredients">
                {ingredients.map( (ingredient, i) => 
                <input type='text' name={`ingredients[${i}]`} key={`ingredients[${i}]`} value={ingredient} onChange={ handleOnChange }/>
                )}
            <button type="button" name="add ingredients" onClick={handleOnClick}> (+) Add Ingredient </button>
            </div>
            <br/>
            <label> Instructions: </label>
            <div name="instructions">
                {instructions.map( (instruction, i) =>
                <input type='text' name={`instructions[${i}]`} value={instruction} onChange={ handleOnChange } />
                )}
            <button type="button" name="add instructions" onClick={handleOnClick}> (+) Add Instructions </button>
            </div>
            <br/>
            <label> Tags: </label>
            <div name="tags">
                {tags.map( (tag, i) =>
                <input type='text' name={`tags[${i}]`} value={tag} onChange={ handleOnChange } />
                )}
            <button type="button" name="add tags" onClick={handleOnClick}> (+) Add Tags </button>
            </div>
            <br/>
            <label> Source: </label>
            <input type='text' name="source" value={source} onChange={ (e) => setSource(e.target.value) } />

            <br/>
            <input type="submit" value="Add Meal" />
        </form>
    )
}

export default MealForm