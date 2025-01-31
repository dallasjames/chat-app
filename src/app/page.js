import React from 'react'
import Hero from '../components/Hero/component'
import Copy from 'components/Copy/component'

import './page.scss'

export default function Home() {
  return (
    <div className='Home'>
      <Hero />
      <Copy />
    </div>
  )
}
