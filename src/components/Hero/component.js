"use client"
import React from 'react'
import './styles.scss'

export default function Hero({
  imageSrc = '/images/heroes/cow.jpg',
  title = 'This is a cow.',
}) {
  return (
    <div
      style={{
        backgroundImage: `url('${imageSrc}')`
      }}
      className='Hero'
      onClick={() => console.log('clicked')}
    >
      <h1>{title}</h1>
    </div>
  )
}