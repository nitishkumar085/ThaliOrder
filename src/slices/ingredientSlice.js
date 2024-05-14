import {createSlice} from '@reduxjs/toolkit'

export const items = {
    chapati :{},
    dal : {}, 
    sweets : {},
    paneer: {},
    pickle : {},
    curd :{},
    list : {}

}



export const ingredientSlice = createSlice({
    name : "thaliIngregients",
    initialState : items,
    reducers : {
        addIngredients : (state,action)=>{
            const {payload :{key,...value}} = action
            state[key] = value
        },
        deleteItems : (state,action)=>{
            const {payload:{key}} = action
            state[key] = {}
        },
        generateList : (state,action)=>{
            const {payload:{key,...value}} = action
            state.list[key] = value
        },
        deleteListItems : (state,action)=>{
            const{payload:{key}} = action
            delete state.list[key]
        }
       
    }

})


export const {addIngredients,deleteItems,generateList,deleteListItems}  = ingredientSlice.actions
export default ingredientSlice.reducer