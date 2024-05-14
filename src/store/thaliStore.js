import {configureStore} from '@reduxjs/toolkit'
import ingredientReducer from '../slices/ingredientSlice'

const thaliStore = configureStore({
    reducer: {
        thaliIngregients : ingredientReducer 
    }
})

export default thaliStore