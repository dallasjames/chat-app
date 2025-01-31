import React from 'react'
import Hero from 'components/Hero/component'
import './page.scss'
import Copy from 'components/Copy/component'
import Comparison from 'components/Comparison/component'

export default function About() {
  return (
    <div className='About'>
      <Hero
        imageSrc='/images/heroes/ducks.jpg'
        title='This is not a cow.'
      />
      <Copy
        copy={[
          'you\'re a wizard harry',
          'you\'re a wizard harry',
          'you\'re a wizard harry',
          'you\'re a wizard harry',
          'you\'re a wizard harry',
          'you\'re a wizard harry',
          'you\'re a wizard harry',
          'you\'re a wizard harry',
          'you\'re a wizard harry',
          'you\'re a wizard harry',
          'you\'re a wizard harry',
          'you\'re a wizard harry',
          'you\'re a wizard harry',
          'you\'re a wizard harry',
          'you\'re a wizard harry',
          'you\'re a wizard harry',
        ]}
      />
      <Comparison />
    </div>
  )
}
