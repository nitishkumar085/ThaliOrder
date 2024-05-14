import React from 'react'
import ContentList from './ContentList'
import Header from './Header'
import {Routes,Route} from 'react-router-dom'
import Start from './Start'
import Checkout from './Checkout'

function ThaliApp() {
  return (
    <div>
      <div>
       <Header/>
       </div>
       <div>
       <Routes>
            <Route exact path="/" element={<Start/>}/>
            <Route exact path="/menu" element={<ContentList/>}/>
            <Route exact path="/menu/checkout" element={<Checkout/>}/>
       </Routes>
       </div>
  </div>
     
  )
}

export default ThaliApp