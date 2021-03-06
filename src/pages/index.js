import React from 'react'
import EspaceSanteCard from '../components/EspaceSanteCard'
import favicon from '../images/favicon.png'
import Helmet from 'react-helmet'
import EspaceSanteAppBar from '../components/appBar'

const IndexPage = () => {

  return (
    <main>
      <Helmet>
        <link rel='icon' href={favicon} />
        <title>EspaceSanteContact</title>
        <script src="chatScript.js"/>
      </Helmet>
      <EspaceSanteAppBar />
      <EspaceSanteCard />
    </main>
  )
}

export default IndexPage
