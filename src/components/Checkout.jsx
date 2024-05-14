import React from 'react'
import {useSelector} from 'react-redux'
import CheckOutList from './CheckOutList'

function Checkout() {
  const data = useSelector((state)=>{return state})

  const billList = Object.entries(data.thaliIngregients.list)
  const total = Object.entries(data.thaliIngregients.list).map((val)=>{return val[1].price})
  const grand = total.reduce((tot,ind)=>{
    return tot += ind
  })
  const itm = billList.map((val)=>{
    const [key,value] = val
    return (
      <CheckOutList  key = {key} item={key} value={value}/>
    )

  })
  return (
    <div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",padding:"20px"}}>
          <div style={{width:"80%",height:"80%",border:"5px solid pink"}}>
            <h2 style={{textAlign:'center',marginTop:"5px"}}>list of items</h2>
            <hr/>
            <div style={{height:"45vh"}}>
                <table className="table" style={{textAlign:"center"}}>
                  <thead>
                    <tr>
                      <th scope="col">Item</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {billList && itm}
                  </tbody> 
                </table>
            </div>           
            <hr/>
            <h3 style={{float:"right",marginRight:"5px"}}>Total Bill : {grand}</h3>
          </div>
        </div>
        
    </div>
  )
}

export default Checkout