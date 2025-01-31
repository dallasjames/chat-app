import React from 'react'
import './styles.scss'

export default function Copy({
  copy = [
    'have you ever had a dream that that you um you had you you would you could you do you would you want you you could do so you you you could you you want you',
    'have you ever had a dream that that you um you had you you would you could you do you would you want you you could do so you you you could you you want you',
    'have you ever had a dream that that you um you had you you would you could you do you would you want you you could do so you you you could you you want you',
    'have you ever had a dream that that you um you had you you would you could you do you would you want you you could do so you you you could you you want you',
    'have you ever had a dream that that you um you had you you would you could you do you would you want you you could do so you you you could you you want you',
    'have you ever had a dream that that you um you had you you would you could you do you would you want you you could do so you you you could you you want you',
    'have you ever had a dream that that you um you had you you would you could you do you would you want you you could do so you you you could you you want you',
    'have you ever had a dream that that you um you had you you would you could you do you would you want you you could do so you you you could you you want you',
    'have you ever had a dream that that you um you had you you would you could you do you would you want you you could do so you you you could you you want you',
    'have you ever had a dream that that you um you had you you would you could you do you would you want you you could do so you you you could you you want you',
    'have you ever had a dream that that you um you had you you would you could you do you would you want you you could do so you you you could you you want you',
    'have you ever had a dream that that you um you had you you would you could you do you would you want you you could do so you you you could you you want you',
    'have you ever had a dream that that you um you had you you would you could you do you would you want you you could do so you you you could you you want you',
    'have you ever had a dream that that you um you had you you would you could you do you would you want you you could do so you you you could you you want you',
    'have you ever had a dream that that you um you had you you would you could you do you would you want you you could do so you you you could you you want you',
  ],
}) {
  return (
    <div className='Copy'>
      <div className='container'>
        {copy.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </div>
    </div>
  )
}