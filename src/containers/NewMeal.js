//meal container
import React, {useEffect, useState} from 'react'
import ImportForm from '../components/ImportForm'
import MealForm from '../components/MealForm'
import {useSelector, useDispatch } from 'react-redux'
import { addMeal, importMeal } from '../actions/mealActions'

function NewMeal() {
    // Meal states to be passed
    let initialState = {
        title: '',
        category: '',
        ingredients: ['','',''],
        instructions: ['','',''],
        tags:[''],
        source:''
        }
    const [meal, setMeal] = useState(initialState)
    
    const dispatch = useDispatch();
 
    const handleSubmit = (meal) => {      
        //do addMeal stuff
        dispatch(addMeal(meal))
    }

    const handleImport = (url) => {
        //do import stuff
        console.log("Importing...")
        debugger
        dispatch(importMeal(url))

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