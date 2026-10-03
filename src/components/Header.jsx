import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

import style from './header.module.css'

const MAX_THUMBS = 4

function Header() {
  const data = useSelector((state) => state)
  const selected = Object.entries(data.thaliIngregients.list)
  const count = selected.length

  const [open, setOpen] = useState(false)
  const location = useLocation()

  // close the mobile menu after navigating
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  // close on Escape, and when the screen grows past the mobile breakpoint
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const onResize = () => {
      if (window.innerWidth > 820) setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const thumbs = selected.slice(0, MAX_THUMBS).map(([key, val]) => (
    <img src={val.image} key={key} className={style.thumb} alt={key} />
  ))
  const extra = count - MAX_THUMBS

  const linkClass = ({ isActive }) =>
    isActive ? `${style.link} ${style.active}` : style.link

  return (
    <>
      <header className={style.bar}>
        <div className={style.inner}>
          <Link to="/" className={style.brand}>
            <img
              src="/favicon.png"
              alt="Thali Junction logo"
              className={style.logo}
            />
            <span className={style.wordmark}>
              <span className={style.name}>Thali Junction</span>
              <span className={style.tag}>Homestyle platters</span>
            </span>
          </Link>

          <button
            type="button"
            className={`${style.toggle} ${open ? style.toggleOpen : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <span className={style.bars} aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            {count > 0 && !open && (
              <em className={style.toggleBadge}>{count}</em>
            )}
          </button>

          <nav
            id="primary-nav"
            className={`${style.nav} ${open ? style.navOpen : ''}`}
            aria-label="Primary"
          >
            <NavLink to="/" end className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/menu" className={linkClass}>
              Menu
            </NavLink>

            <div className={style.tray} title="Items in your thali">
              <span className={style.trayLabel}>
                Thali
                {count > 0 && <em className={style.badge}>{count}</em>}
              </span>
              <div className={style.thumbs}>
                {count === 0 ? (
                  <span className={style.empty}>Empty plate</span>
                ) : (
                  <>
                    {thumbs}
                    {extra > 0 && <span className={style.more}>+{extra}</span>}
                  </>
                )}
              </div>
            </div>

            <Link to="/login" className={style.login}>
              Login
            </Link>
          </nav>
        </div>
      </header>

      {open && (
        <div
          className={style.backdrop}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
      <div className={style.spacer} />
    </>
  )
}

export default Header