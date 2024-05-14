import React, { useState } from 'react'
import {addIngredients,deleteItems,deleteListItems,generateList} from '../slices/ingredientSlice'
import {useDispatch} from 'react-redux'

function Items(props) {
  const[quantity,setquantity] =useState(0)
  const dispatch = useDispatch()
  const addQuantity=(e)=>{
    setquantity(e.target.value)
    
  }
  const addItem=(e)=>{
    if(quantity){
      const amount = quantity * props.val.price
      dispatch(addIngredients({key:e.target.value,quantity:quantity, price:amount,image:props.val.image}))
      dispatch(generateList({key:e.target.value,quantity:quantity, price:amount,image:props.val.image}))

    }
          
        
  }
  const deleteItem=(e)=>{
    if(!!e.target.value){
      dispatch(deleteItems({key:e.target.value}))
      dispatch(deleteListItems({key:e.target.value}))
    }
  }

  return (
    <div>
        <div>
        <div className="card" style={{width: "18rem"}}>
  <img src={props.val.image} className="card-img-top" alt={props.val.title} style={{width:"100%",height:"200px"}}/>
  <div className="card-body">
    <h5 className="card-title">{props.val.title}</h5>
    <p className="card-text">{props.val.details}</p>
    <div>
      <span>price:{props.val.price}</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <label htmlFor='quantity'>Quantity</label>
      <input type="number" style={{width:"20%"}} onChange={addQuantity}/>
    </div>
    <div style={{marginTop:"5px",textAlign:"center"}}>
    <button className="btn btn-primary" value={props.val.id} onClick={addItem}>Add Item</button>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button className="btn btn-primary" value={props.val.id} onClick={deleteItem}>Delete</button>
    </div>

  </div>
</div>
    </div>
    </div>
  )
}

export default Items