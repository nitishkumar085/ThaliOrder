import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Items from '../../components/Items'
import style from './menu.module.css'

const MIN_ITEMS = 2

function ContentList() {
  const data = useSelector((state) => state)
  const [list, setlist] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('./listOfMenu.json').then((val) => {
      setlist(val.data)
    })
  }, [])

  const selectedCount = Object.entries(data.thaliIngregients.list).length
  const remaining = Math.max(MIN_ITEMS - selectedCount, 0)

  const checkouthandle = () => {
    if (selectedCount < MIN_ITEMS) {
      alert('add atleast 2 items')
      return navigate('/menu')
    }
    navigate('/checkout')
  }

  const lst = list.map((val) => (
    <div className={style.menu_card} key={val.id}>
      <Items val={val} />
    </div>
  ))

  return (
    <div className={style.menu_container}>
      {/* abstract background layers */}
      <div className={style.bg} aria-hidden="true">
        <span className={`${style.blob} ${style.blob_turmeric}`} />
        <span className={`${style.blob} ${style.blob_beet}`} />
        <span className={`${style.blob} ${style.blob_mint}`} />
        <span className={style.rings} />
        <span className={style.grain} />
      </div>

      <div className={style.content}>
        <header className={style.header}>
          <h1 className={style.title}>Build your thali</h1>
          <p className={style.subtitle}>
            Choose at least {MIN_ITEMS} dishes. We’ll plate them together.
          </p>
        </header>

        {list.length === 0 ? (
          <p className={style.empty}>Loading the menu…</p>
        ) : (
          <div className={style.grid}>{lst}</div>
        )}
      </div>

      <div className={style.checkout_bar}>
        <div className={style.checkout_info}>
          <span className={style.count}>{selectedCount}</span>
          <span className={style.count_label}>
            {selectedCount === 1 ? 'dish selected' : 'dishes selected'}
            {remaining > 0 && ` · add ${remaining} more`}
          </span>
        </div>
        <button
          type="button"
          className={`${style.checkout_btn} ${remaining > 0 ? style.not_ready : ''}`}
          onClick={checkouthandle}
        >
          Go to checkout
        </button>
      </div>
    </div>
  )
}

export default ContentList