"use client"
import React, { useEffect, useState } from 'react'
import "../styles/app.scss"

export default function RootLayout({ children }) {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const mouseFollowerCount = 10
  const followerArray = Array.from({ length: mouseFollowerCount }, (_, i) => i)

  useEffect(() => {
    document.onmousemove = (event) => {
      var e = event
      setX(e.clientX)
      setY(e.clientY)
    }
  }, [])

  return (
    <html lang="en">
      <title>Chat App</title>
      <meta name="description" content="A website built by chat." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <body>
        <div className='spinner'>
          {followerArray.map((item, index) => {
            const mulitplier = index * 100
            const newX = x + mulitplier
            const newY = y + mulitplier
            return (
              <div
                key={'item-' + index}
                style={{top: newY, left: newX}}
                className='mouse-follower'
              />
            )
          })}
        </div>
        {children}
      </body>
    </html>
  )
}
