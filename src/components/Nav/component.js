import React from 'react'
import './styles.scss'

export default function Nav({
  links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Magician', href: '/magician' },
  ]
}) {
  return (
    <div className='Nav'>
      <div className='Nav__container'>
        <a href='/' className='Nav__logo'>
          <img src='/images/logo.png' alt='logo' />
        </a>
        <nav>
          {links.map((link, index) => (
            <a key={index} href={link.href}>{link.name}</a>
          ))}
        </nav>
      </div>
    </div>
  )
}