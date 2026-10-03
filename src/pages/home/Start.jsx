import React from 'react'
import { Link } from 'react-router-dom'

import style from './home.module.css'

function Start() {
  return (
    <section className={style.hero}>
      <img
        src="/photos/mainpage.png"
        alt="Traditional Indian thali"
        className={style.heroImage}
      />
      <div className={style.veil} />

      <div className={style.stage}>
        <header className={style.copy}>
          <p className={style.kicker}>Food Life · Homestyle platters</p>
          <h1 className={style.title}>Craft your perfect thali</h1>
          <p className={style.lead}>
            Dal, paneer, chapati, pickle, curd and sweets — assembled around
            one plate, just the way you like it.
          </p>
        </header>

        <div className={style.ctaAnchor}>
          <span className={style.halo} aria-hidden="true" />
          <Link to="/menu" className={style.ctaLink}>
            <button type="button" className={style.cta}>
              Make your Thali
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Start
