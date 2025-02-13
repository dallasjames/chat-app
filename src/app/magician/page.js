import React from 'react'
import './page.scss'
import Hero from 'components/Hero/component'

export default function Magician() {
  return (
    <div className='Magician'>
      <Hero
        imageSrc='/images/heroes/magician.jpg'
        title='I do magic shit.'
      />
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="img_avatar.png" alt="Avatar" style={{width:300, height:300}} />
          </div>
          <div class="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
    </div>
  )
}
