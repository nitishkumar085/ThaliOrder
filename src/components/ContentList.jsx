import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import Items from './Items'
import {useSelector} from 'react-redux'

function ContentList() {
  const data = useSelector(state=>{return state})
  const [list,setlist] =useState([])
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get("./listOfMenu.json").then(val =>{setlist(val.data)})
  },[])
  
  const lst = list.map((val)=>{
    return <Items key={val.id} val ={val}/>
  })

  const checkouthandle = () =>{
    const check = Object.entries(data.thaliIngregients.list).length
   
    if(check < 2){
      alert("add atleast 2 items")
      return navigate("/menu")
    }
  }

  return (
    <div style={{marginTop:"57px",padding:"20px"}}>
      <h1 style={{textAlign:"center"}}>Menu  </h1>
      <hr />
      <div style={{display:"flex",flexWrap:"wrap",gap:"50px"}}>
          {lst}
      </div>
        <hr/>
        <div style={{textAlign:"center"}}>
       <button onClick={checkouthandle} style={{backgroundColor:"lightBlue"}}> <Link to='/menu/checkout' style={{textDecoration:"none",color:"black"}}>checkout</Link></button>
       </div>
    </div>
  )
}

export default ContentList