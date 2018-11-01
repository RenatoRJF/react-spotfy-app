import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="search" />
    </Search>

    <User>
      <img src="https://avatars1.githubusercontent.com/u/8368039?v=4" alt="avatar"/>
      Renato Ferreira
    </User>
  </Container>
);

export default Header;
