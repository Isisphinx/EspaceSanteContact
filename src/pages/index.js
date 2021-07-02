import React from 'react'
import Helmet from 'react-helmet'
import AlignItemsList from '../components/avatar'
import ContactList from '../components/contactList'
import favicon from '../images/icon.png'

const IndexPage = () => (
  <main>
    <title>EspaceSanteContact</title>
    <Helmet>
      <link rel='icon' href={favicon} />
    </Helmet>
    <AlignItemsList />
    <ContactList />
  </main>
)

export default IndexPage
