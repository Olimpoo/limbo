import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const PropertiesFilters = () => (
  <Card>
    <Card.Body className='d-flex justify-content-between'>
      <Button variant='primary'>
        <i className='fas fa-map-marker-alt mr-2'></i>
        Ver mapa
      </Button>
      <Button variant='primary' className='btn-primary-inverse'>
        <i className='fas fa-filter mr-2'></i>
        Filtrar
      </Button>
    </Card.Body>
  </Card>
);

export default PropertiesFilters;
