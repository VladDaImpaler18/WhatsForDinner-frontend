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

    const handleImport = (meal) => {
        //do import stuff
        dispatch(importMeal(meal))

    }


    return (
        <div>
            <ImportForm handleImport={handleImport} />
            <br/>
            <MealForm meal={meal} handleSubmit={handleSubmit} />
            
        </div>
    )
}

export default NewMeal