import React, {useEffect, useState} from 'react'
import ImportForm from '../components/ImportForm'
import MealForm from '../components/MealForm'
import {useSelector, useDispatch } from 'react-redux'

function NewMeal() {
    const meal = useSelector(state => state.meal);
    const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch()
    //     return () => {
    //         cleanup
    //     }
    // }, [input])

    const handleSubmit = (e) => {
        e.preventDefault()
        let meal = {title, category, ingredients, instructions, tags, source}
        
        addMeal(meal)
        // setTitle('')
        // setCategory('')
        // setIngredients(['','',''])
        // setInstructions(['','',''])
        // setTags([''])
        // setSource('')
        //submit mealData to backend, then route to show page
    }

    const handleImport = (e) => {
        e.preventDefault()
        //do import stuff, and change the state

    }


    return (
        <div>
            <ImportForm hanadleImport={handleImport} />
            <br/>
            <MealForm meal={meal} handleSubmit={handleSubmit} />
            
        </div>
    )
}

export default NewMeal