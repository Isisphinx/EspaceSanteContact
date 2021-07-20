import React from 'react'
import IsisCard from '../components/avatar'
import favicon from '../images/favicon.png'
import Helmet from 'react-helmet'
import IsisAppBar from '../components/appBar'

const IndexPage = () => (
  <main>
    <Helmet>
      <link rel='icon' href={favicon} />
      <title>EspaceSanteContact</title>
    </Helmet>
    <IsisAppBar />
    <IsisCard />
  </main>
)

export default IndexPage
