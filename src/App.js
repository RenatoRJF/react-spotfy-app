import React from 'react';

import GlobalStyle from './styles/global'
import { Wrapper, Container } from './styles/components';

import Sidebar from './components/Sidebar';
import Player from './components/Player';


const App = () => (
  <Wrapper>
    <Container>
      <Sidebar />
    </Container>

    <Player />
    <GlobalStyle />
  </ Wrapper>
)

export default App;
