//meal container
import ImportForm from '../components/ImportForm'
import MealForm from '../components/MealForm'
import {useSelector, useDispatch } from 'react-redux'
import { addMeal, importMeal } from '../actions/mealActions'

function NewMeal() {

    const meal = useSelector(state => state.meal)
    const dispatch = useDispatch();

    
 
    const handleSubmit = (meal) => {      
        dispatch(addMeal(meal))
    }

    const handleImport = (meal) => {
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