import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import style from './login.module.css'

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    navigate('/menu')
  }

  return (
    <section className={style.page}>
      <form className={style.card} onSubmit={onSubmit}>
        <p className={style.kicker}>Thali Junction</p>
        <h1 className={style.title}>Welcome back</h1>
        <p className={style.lead}>Sign in to save your plate and place orders.</p>

        <label className={style.label} htmlFor="email">
          Email
        </label>
        <input
          id="email"
          className={style.input}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
        />

        <label className={style.label} htmlFor="password">
          Password
        </label>
        <input
          id="password"
          className={style.input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          required
        />

        <button className={style.submit} type="submit">
          Login
        </button>
      </form>
    </section>
  )
}

export default Login
