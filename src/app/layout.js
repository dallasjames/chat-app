import React from 'react'
import "../styles/app.scss"

export const metadata = {
  title: "Chat App",
  description: "A website built by chat.",
}

// TODO: Add mouse follower

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
