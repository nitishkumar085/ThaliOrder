import React from 'react'

import style from './Checkout.module.css'

function CheckOutList(props) {
  const name = props.title || `Item ${props.item}`

  return (
    <tr className={style.row}>
      <td className={style.cell_img}>
        {props.value.image && (
          <img
            src={props.value.image}
            alt={name}
            className={style.thumb}
            loading="lazy"
          />
        )}
      </td>
      <td className={style.cell_name}>{name}</td>
      <td className={style.cell_qty}>{props.value.quantity}</td>
      <td className={style.cell_price}>₹{props.value.price}</td>
    </tr>
  )
}

export default CheckOutList