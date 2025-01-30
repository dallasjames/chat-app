import React from 'react'
import '../styles/components/Hero.scss'

export default function Hero() {
  return (
    <div className='Hero' onClick={() => console.log('clicked')}>
      <h1>This is a cow.</h1>
    </div>
  )
}