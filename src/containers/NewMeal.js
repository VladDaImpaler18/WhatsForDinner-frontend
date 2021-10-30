//meal container
import React, {useEffect, useState} from 'react'
import ImportForm from '../components/ImportForm'
import MealForm from '../components/MealForm'
import {useSelector, useDispatch } from 'react-redux'
import { addMeal } from '../actions/mealActions'

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
 
    const handleSubmit = (e) => {      
        //do addMeal stuff
        dispatch(addMeal(meal))
    }

    const handleImport = (e) => {
        //do import stuff

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