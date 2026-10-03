import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import CheckOutList from './CheckOutList'
import style from './Checkout.module.css'

function Checkout() {
  const data = useSelector((state) => state)
  const [titles, setTitles] = useState({})

  // look up dish names by id so the bill shows names instead of ids
  useEffect(() => {
    axios
      .get('/listOfMenu.json')
      .then((res) => {
        const map = {}
        res.data.forEach((m) => {
          map[String(m.id)] = m.title
        })
        setTitles(map)
      })
      .catch(() => {})
  }, [])

  const billList = Object.entries(data.thaliIngregients.list)
  const count = billList.length
  const grand = billList.reduce((tot, [, val]) => tot + Number(val.price), 0)

  const itm = billList.map(([key, value]) => (
    <CheckOutList
      key={key}
      item={key}
      title={titles[String(key)]}
      value={value}
    />
  ))

  return (
    <div className={style.page}>
      {/* abstract background layers */}
      <div className={style.bg} aria-hidden="true">
        <span className={`${style.blob} ${style.blob_turmeric}`} />
        <span className={`${style.blob} ${style.blob_beet}`} />
        <span className={`${style.blob} ${style.blob_mint}`} />
        <span className={style.rings} />
        <span className={style.grain} />
      </div>

      <main className={style.wrap}>
        <section className={style.card} aria-labelledby="bill-title">
          <header className={style.header}>
            <h1 id="bill-title" className={style.title}>
              Your thali bill
            </h1>
            <p className={style.subtitle}>
              {count > 0
                ? `${count} ${count === 1 ? 'dish' : 'dishes'} on your plate`
                : 'Nothing on your plate yet'}
            </p>
          </header>

          {count === 0 ? (
            <div className={style.empty}>
              <p>Add at least 2 dishes from the menu to see your bill.</p>
              <Link to="/menu" className={style.back}>
                Browse the menu
              </Link>
            </div>
          ) : (
            <>
              <div className={style.table_wrap}>
                <table className={style.table}>
                  <thead>
                    <tr>
                      <th scope="col">
                        <span className={style.sr}>Photo</span>
                      </th>
                      <th scope="col">Item</th>
                      <th scope="col" className={style.th_qty}>
                        Quantity
                      </th>
                      <th scope="col" className={style.th_price}>
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>{itm}</tbody>
                </table>
              </div>

              <footer className={style.footer}>
                <Link to="/menu" className={style.back}>
                  Edit thali
                </Link>
                <div className={style.total}>
                  <span className={style.total_label}>Total bill</span>
                  <span className={style.total_value}>₹{grand}</span>
                </div>
              </footer>
            </>
          )}
        </section>
      </main>
    </div>
  )
}

export default Checkout