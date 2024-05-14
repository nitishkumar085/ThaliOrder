import React from 'react'

function CheckOutList(props) {
  return (
        <tr>
      <td>{props.item}</td>
      <td>{props.value.quantity}</td>
      <td>{props.value.price}</td>
    </tr>
  
  )
}

export default CheckOutList