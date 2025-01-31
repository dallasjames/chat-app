import React from 'react'
import './styles.scss'

export default function Nav() {
  return (
    <div className='Nav'>
      <div className='Nav__container'>
        <a href='/' className='Nav__logo'>
          <img src='/images/logo.png' alt='logo' />
        </a>
        <nav>
          <a href='/'>Home</a>
          <a href='/about'>About</a>
        </nav>
      </div>
    </div>
  )
}