"use client"
import React, { useEffect, useState } from 'react'
import "../styles/app.scss"
import Nav from 'components/Nav/component'
import Script from 'next/script'

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
        {/* <div className='spinner' style={{top: y, left: x}}>
          {followerArray.map((circle, index) => {
            return (
              <div key={`mouse-circle-${index}`} className='mouse-follower'/>
            )
          })}
        </div> */}
        <Nav />
        {children}
      </body>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-8PNKY9729Q"></Script>
      <Script
        dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-8PNKY9729Q');
          `
        }}
      >
      </Script>
    </html>
  )
}
