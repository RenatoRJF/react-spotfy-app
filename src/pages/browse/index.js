import React from 'react';

import { Container, Title, List, PlayList } from './styles';

const Browse = () => (
  <Container>
    <Title>Navigate</Title>

    <List>
      <PlayList href="">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/81lo1N1%2BFmL._SY355_.jpg"
          alt="Playlist"
        />

        <strong>Gospel songs</strong>
        <p>The best of the gospel songs ever.</p>
      </PlayList>
    </List>
  </Container>
);

export default Browse;
