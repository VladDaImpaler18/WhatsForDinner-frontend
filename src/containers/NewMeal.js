import React, {useState} from 'react'
import ImportForm from '../components/ImportForm'
import MealForm from '../components/MealForm'

function NewMeal(props) {

    const handleSubmit = (e) => {
        e.preventDefault()
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
            <mealForm meal={meal} handleSubmit={handleSubmit} />
            
        </div>
    )
}

export default NewMeal