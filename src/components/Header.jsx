import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

function Header() {
  const data = useSelector((state)=>{return state})
  const img = Object.entries(data.thaliIngregients.list).map((val)=>{

    return (
      <img src={val[1].image} key={val[0]} style={{width:"50px",height:"50px"}} alt={val[0]}/>
    )
  })
  return (
    <div>
        <div>
         <nav className="navbar  fixed-top navbar-expand-lg bg-light">
  <div className="container-fluid">
    <span className="navbar-brand" >Food Life</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <Link to="/" style={{textDecoration:"none"}}><span className="nav-link active">Home</span></Link>
      <div style={{position:"relative",left:"20px"}}>
        <p style={{display:"inline",position:"relative",top:"1px"}}>Items</p>&nbsp;&nbsp;&nbsp;
        {
          img
        }
      </div>
      </div>
    </div>
  </div>
</nav>
    </div>
    </div>
  )
}

export default Header