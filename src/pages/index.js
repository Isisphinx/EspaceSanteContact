import React from 'react'
import ContactList from '../components/contactList'
import favicon from '../images/icon.png'
import Helmet from 'react-helmet'
import h1 from '../components/style.css'


const IndexPage = () => (
  <main>
    <Helmet>
      <link rel="icon" href={favicon} />
      <title>EspaceSanteContact</title>
    </Helmet>
    <div>
      <h1 className={h1}>EspaceSanteContact</h1>
    </div>
    <ContactList />
  </main>
)

export default IndexPage
