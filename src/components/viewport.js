import React from 'react'
import favicon from '../images/icon.png'
import { Helmet } from 'react-helmet'

export default function Viewport({ children }) {
  return (
    <Helmet>
      {/* To ensure proper rendering and touch zooming for all devices, add the responsive viewport meta tag to your <head> element. */}
      <link rel='icon' href={favicon} />
      <title>EspaceSanteContact</title>
      <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no' />
      {children}
    </Helmet>
  )
}
