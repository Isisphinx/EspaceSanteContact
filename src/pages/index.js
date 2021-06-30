import React from 'react'
import ContactList from '../components/contactList'
//import FavIcon from '../components/favIcon'
import favicon from '../images/icon.png'
import Helmet from 'react-helmet'

const IndexPage = () => (
  <main>
    <Helmet>
      <link rel="icon" href={favicon} />
    </Helmet>
    <title>EspaceSanteContact</title>
    <div>
      <p>iadaizobzbdouazbdabdabdaozbdaizdbipazbd</p>
    </div>
    
    <ContactList />
  </main>
)

export default IndexPage
