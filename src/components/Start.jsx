import React from 'react'
import { Link } from 'react-router-dom'


function Start() {
  return (
    <div style={{postiton:"relative",marginTop:"57px"}}>
        <img src="./photos/mainPage.jpg" alt="thali" style={{width:"100%",height:"100vh"}}/>
        <div style={{textAlign:"center",marginRight:"150px"}}>
        <Link to='/menu' ><button style={{position:"absolute",top:"150px"}}>Make your Thali</button></Link>
        </div>
    </div>
  )
}

export default Start