import * as React from 'react'
//pour les composants Gatsby
import { Link, useStaticQuery, graphql } from 'gatsby'
//pour les composants MATERIAL-UI
import { Button } from '@material-ui/core';
 

//pour le CSS
import {
  container,
  heading,
  siteTitle,
  topDiv,
  middleDiv,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }  
`)


  return (
    <main className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title> 
      <header>
        <p className={siteTitle}>{data.site.siteMetadata.title}</p>
      </header>
      <div className={middleDiv}>
        <p ></p>
      </div>
      {children}
    </main>
  )
}

export default Layout