import React, { useState } from 'react'
import {
  addIngredients,
  deleteItems,
  deleteListItems,
  generateList,
} from '../slices/ingredientSlice'
import { useDispatch } from 'react-redux'

import style from './Items.module.css'

function Items(props) {
  const [quantity, setquantity] = useState(0)
  const dispatch = useDispatch()

  const addQuantity = (e) => {
    setquantity(e.target.value)
  }

  const addItem = (e) => {
    if (quantity) {
      const amount = quantity * props.val.price
      dispatch(
        addIngredients({
          key: e.target.value,
          quantity: quantity,
          price: amount,
          image: props.val.image,
        })
      )
      dispatch(
        generateList({
          key: e.target.value,
          quantity: quantity,
          price: amount,
          image: props.val.image,
        })
      )
    }
  }

  const deleteItem = (e) => {
    if (!!e.target.value) {
      dispatch(deleteItems({ key: e.target.value }))
      dispatch(deleteListItems({ key: e.target.value }))
    }
  }

  const total = quantity > 0 ? quantity * props.val.price : 0
  const inputId = `qty-${props.val.id}`

  return (
    <article className={style.card}>
      {/* abstract background */}
      <div className={style.bg} aria-hidden="true">
        <span className={`${style.shape} ${style.shape_a}`} />
        <span className={`${style.shape} ${style.shape_b}`} />
        <span className={style.dots} />
        <span className={style.ring} />
      </div>

      <div className={style.media}>
        <img
          src={props.val.image}
          alt={props.val.title}
          className={style.image}
          loading="lazy"
        />
        <span className={style.price}>₹{props.val.price}</span>
      </div>

      <div className={style.body}>
        <h3 className={style.title}>{props.val.title}</h3>
        <p className={style.details}>{props.val.details}</p>

        <div className={style.qty_row}>
          <label htmlFor={inputId} className={style.qty_label}>
            Quantity
          </label>
          <input
            id={inputId}
            type="number"
            min="0"
            inputMode="numeric"
            className={style.qty_input}
            onChange={addQuantity}
          />
        </div>

        <p className={style.total} aria-live="polite">
          {total > 0 ? `Total ₹${total}` : 'Enter a quantity to add'}
        </p>

        <div className={style.actions}>
          <button
            type="button"
            className={style.btn_add}
            value={props.val.id}
            onClick={addItem}
          >
            Add item
          </button>
          <button
            type="button"
            className={style.btn_delete}
            value={props.val.id}
            onClick={deleteItem}
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  )
}

export default Items