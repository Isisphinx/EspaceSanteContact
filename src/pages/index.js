import React from 'react'
import IsisCard from '../components/avatar'
import favicon from '../images/icon.png'
import Helmet from 'react-helmet'
import h2 from '../components/style.css'

const IndexPage = () => (
  <main>
    <Helmet>
      <link rel='icon' href={favicon} />
      <title>EspaceSanteContact</title>
    </Helmet>
    <h2 className={h2}>EspaceSanteContact</h2>
    <IsisCard />
  </main>
)

export default IndexPage
