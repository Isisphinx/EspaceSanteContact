import React from 'react'
import EspaceSanteContainer from '../components/container'
import favicon from '../images/favicon.png'
import Helmet from 'react-helmet'
import EspaceSanteAppBar from '../components/appBar'

const IndexPage = () => (
  <main>
    <Helmet>
      <link rel='icon' href={favicon} />
      <title>EspaceSanteContact</title>
    </Helmet>
    <EspaceSanteAppBar />
    <EspaceSanteContainer />
  </main>
)

export default IndexPage
