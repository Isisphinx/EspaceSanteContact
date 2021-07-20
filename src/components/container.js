import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import EspaceSanteCard from '../components/EspaceSanteCard'

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xs" marginLeft="auto">
        <EspaceSanteCard />  
      </Container>
    </React.Fragment>
  );
}