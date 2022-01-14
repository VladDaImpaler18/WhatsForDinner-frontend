import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import FileUploader from './FileUploader';
//TODO: Div to Display error messages
//https://javascript.info/formdata
function MealForm(props){
//props.meal, props.handleSubmit
    const meal = useSelector(state => state.meal)

    // const styles = StyleSheet.create({
    //     container: {
    //       paddingTop: 50,
    //     },
    //     tinyLogo: {
    //       width: 50,
    //       height: 50,
    //     },
    //     logo: {
    //       width: 66,
    //       height: 58,
    //     },
    //   });
    
    const [selectedFile, setSelectedFile] = useState(null);
/*  -- Internal Default State --  */
    const [title, setTitle] = useState(props.meal.title)
    const [image, setImage] = useState(props,meal.image)
    const [category, setCategory] = useState(props.meal.category)
    const [ingredients, setIngredients] = useState(props.meal.ingredients)
    const [instructions, setInstructions] = useState(props.meal.instructions)
    const [tags, setTags] = useState(props.meal.tags)
    const [source, setSource] = useState(props.meal.source)
/*  -------------------  */
    useEffect(() => {
        setTitle(meal.title)
        setImage(meal.image)
        setCategory(meal.category)
        setIngredients(meal.ingredients)
        setInstructions(meal.instructions)
        setTags(meal.tags)
        setSource(meal.source)
    }, [meal])

    const submit = (e) => {
        e.preventDefault()
        let meal = {title, image, category, ingredients, instructions, tags, source}
        props.handleSubmit(meal)
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
                        element.setAttribute("placeholder","Must be filled in")//TODO: Last one should show this, any missing ones inbetween elements shifted.
                    })
                    break;
                }

            case "add instructions":
                if(instructions[instructions.length-1] !== '')
                    return setInstructions([...instructions,''])
                else {
                    let instructionsDiv = Array.from(e.target.parentElement.children)
                    instructionsDiv.filter(element => element.type === "text" && element.value === "").forEach(element => { 
                        element.setAttribute("placeholder","Must be filled in")//TODO: Same as above
                    })
                    break;
                }

            case "add tags":
                if(tags[tags.length-1] !== '')
                    return setTags([...tags,''])
                else {
                    let tagsDiv = Array.from(e.target.parentElement.children)
                    tagsDiv.filter(element => element.type === "text" && element.value === "").forEach(element => {
                        element.setAttribute("placeholder","Must be filled in")//TODO: Previous TODOs + Refactor
                    })
                }

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
        <form onSubmit={submit}>
            {/*
            <input
                type="file"
                value={selectedFile}
                onChange={(e) => setSelectedFile(e.target.files[0])}
            />
                !!image ? 
                <input type="file"> </input>
                :
                <Image
                style={styles}
                source={image}
                />
            */}
            <FileUploader onFileSelect={(file)=>setSelectedFile(file)} />
            <label> Title </label>
            <input
                type='text'
                name="title"
                value={title}
                onChange={ (e) => setTitle(e.target.value) }
            />
            <br/>
            <label> Category:  </label>
            <input
                type='text'
                name="category"
                value={category}
                onChange={ (e) => setCategory(e.target.value) }
            />
            <br/>
            <label> Ingredients: </label>
            <div name="ingredients">
                {
                ingredients.map( (ingredient, i) => 
                <input
                    type='text'
                    name={`ingredients[${i}]`}
                    key={`ingredients[${i}]`}
                    value={ingredient}
                    onChange={ handleOnChange }
                />
                )}
            <button type="button" name="add ingredients" onClick={handleOnClick}> (+) Add Ingredient </button>
            </div>
            <br/>
            <label> Instructions: </label>
            <div name="instructions">
                {instructions.map( (instruction, i) =>
                <input
                    type='text'
                    name={`instructions[${i}]`}
                    value={instruction}
                    onChange={ handleOnChange }
                />
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