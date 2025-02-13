import React from 'react'
import './styles.scss'

export default function Comparison({
  items = [
    {
      title: 'This is a cow.',
      imageSrc: '/images/heroes/cow.jpg',
      body: `
        <p>Cows are living animals made of organic tissue, while rubber ducks are artificial objects made of rubber or plastic.</p>
        <p>Cows are raised for milk, meat, and leather production, whereas rubber ducks are primarily toys used for entertainment, especially in bathtubs.</p>
        <p>Cows can walk, run, and graze on their own, while rubber ducks are inanimate and can only float or be moved by an external force.</p>
        <p>Cows produce natural sounds like "moo," whereas rubber ducks typically make a squeaky noise when squeezed.</p>
        <p>Cows are born, grow, reproduce, and eventually die, whereas rubber ducks do not age, reproduce, or have a biological life cycle.</p>
      `
    },
    {
      title: 'This is not a cow.',
      imageSrc: '/images/heroes/ducks.jpg',
      body: `
        <p>Rubber ducks are man-made objects, while cows are naturally occurring living animals.</p>
        <p>Rubber ducks are mainly used as toys or decorations, whereas cows are farm animals raised for milk, meat, and leather.</p>
        <p>Rubber ducks can only float or be moved manually, while cows can walk, run, and interact with their environment.</p>
        <p>Cows communicate through sounds like "moo" and body language, while rubber ducks only make noise when squeezed.</p>
        <p>Cows have organs, eat food, and grow, while rubber ducks are produced in factories and remain unchanged over time.</p>
      `
    },
  ]
}) {
  return (
    <div className='Comparison'>
      <div className='container'>
        {items?.length > 0 && items.map((item, index) => {
          return (
            <div key={`item-${index}`} className='half'>
              <h1>{item.title}</h1>
              <img src={item.imageSrc} alt={item.title} />
              <div className='body' dangerouslySetInnerHTML={{ __html: item.body }} />
            </div>
          )
        })}
      </div>
    </div>
  )
}