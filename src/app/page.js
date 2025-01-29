import React from 'react'
import Hero from '../components/Hero'

import './page.scss'
import Copy from 'components/Copy'

export default function Home() {
  return (
    <div className='Home'>
      <Hero />
      <Copy />
    </div>
  )
}
