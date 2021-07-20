import React from 'react';
import Container from '@material-ui/core/Container';
import EspaceSanteCard from '../components/EspaceSanteCard'

export default function SimpleContainer() {
  return (
      <Container maxWidth="sm">
        <EspaceSanteCard />  
      </Container>
  );
}